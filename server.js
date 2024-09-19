// const express = require('express');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const axios = require('axios');
// const FormData = require('form-data');
// const { SoffosServices, SoffosConfig } = require('soffosai-node');

// const app = express();
// const port = 3500;

// const my_apiKey = "Token 969d75e8-eabc-4fde-9114-da6164a0e81b";
// SoffosConfig.apiKey = my_apiKey;

// const imgbbApiKey = '4a6a10a159b5c8608ceb6d8b2f3750ff'; // Replace with your actual imgbb API key

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//     const imagePath = req.file.path;

//     try {
//         // Upload image to imgbb
//         const formData = new FormData();
//         formData.append('image', fs.createReadStream(imagePath));
//         const imgbbResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
//             headers: {
//                 ...formData.getHeaders()
//             }
//         });

//         const imageUrl = imgbbResponse.data.data.url;

//         // Call Soffos API with the image URL
//         const imageService = new SoffosServices.ImageAnalysisService();
//         const response = await imageService.call(
//             "user123",
//             "Describe the contents of the image.",
//             imageUrl
//         );

//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     } finally {
//         // Clean up the uploaded file
//         fs.unlinkSync(imagePath);
//     }
// });

// app.post('/generate-assessment', async (req, res) => {
//     const { context, mode } = req.body;
//     console.log('mode is',mode)
//     const validModes = ["multiple choice", "fill in the blanks"]; // Updated valid modes
    
//     // if (!validModes.includes(mode)) {
//     //     return res.status(400).json({ error: `mode: "${mode}" is not a valid choice.` });
//     // }

//     const assessmentService = new SoffosServices.AssessmentGeneratorService();

//     try {
//         const response = await assessmentService.call("teacher123", context, mode);
//         console.log(response)
//         res.json(response);
//     } catch (error) {
//         console.log("The error is",error)
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { SoffosServices, SoffosConfig } = require('soffosai-node');


const app = express();
const port = 3500;

const my_apiKey = "Token 969d75e8-eabc-4fde-9114-da6164a0e81b";
const SOFFOS_API_KEY = "Token 969d75e8-eabc-4fde-9114-da6164a0e81b";

SoffosConfig.apiKey = my_apiKey;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

let previousScores = [];


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Image upload and analysis
app.post('/upload-image', upload.single('image'), async (req, res) => {
    const imagePath = req.file.path;

    try {
        const formData = new FormData();
        formData.append('image', fs.createReadStream(imagePath));
        const imgbbResponse = await axios.post(`https://api.imgbb.com/1/upload?key=4a6a10a159b5c8608ceb6d8b2f3750ff`, formData, {
            headers: {
                ...formData.getHeaders()
            }
        });

        const imageUrl = imgbbResponse.data.data.url;
        const imageService = new SoffosServices.ImageAnalysisService();
        const response = await imageService.call("user123", "Describe the contents of the image.", imageUrl);

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        fs.unlinkSync(imagePath);
    }
});

// Text Simplification
app.post('/simplify-text', async (req, res) => {
    const { text } = req.body;
    const simplifyService = new SoffosServices.SimplifyService();

    try {
        const response = await simplifyService.call("user123", text);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Text Summarization
app.post('/summarize-text', async (req, res) => {
    const { text, sent_length } = req.body;  // Add sent_length in the body
    const summarizeService = new SoffosServices.SummarizationService();

    try {
        const response = await summarizeService.call("user123", text, sent_length);  // Add sent_length
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/score-assessment', async (req, res) => {
    const { context, question, userAnswer, expectedAnswer } = req.body;

    // Instantiate the AnswerScoringService
    const assessmentScoringService = new SoffosServices.AnswerScoringService({ apiKey: my_apiKey });

    try {
        // Use the service to score the assessment
        const response = await assessmentScoringService.call(
            "teacher123",  // a sample user ID
            context,
            question,
            userAnswer,
            expectedAnswer
        );

        console.log('Response from Soffos:', response); // Debugging line

        res.json({
            score: response.score,
            reasoning: response.reasoning
        });
    } catch (error) {
        console.error('Error:', error); // Debugging line
        res.status(500).json({ error: error.message });
    }
});


// assessment page

app.post('/generate-questions', async (req, res) => {
    const { context, mode } = req.body;

    const service = new SoffosServices.AssessmentGeneratorService();
    const output = await service.call('user123', context, mode, 5, 3);

    console.log('API response:', JSON.stringify(output, null, 2)); // Log the API response

    res.json({ questions: output.qna_sets });
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

