class ServiceIO {
  /*
  Defines the IO of services. The structure is specifically important to determine if
  the input provided by the programmer or other service is acceptable
  */

  constructor() {
    this.service = null;
    this.required_input_fields = [];
    this.require_one_of_choices = [];
    this.defaults = [];
    this.input_structure = {};
    this.optional_input_fields = [];
    this.output_structure = {};
    this.primary_output_field = null;

    this._output_fields = Object.keys(this.output_structure);

    if (!this.primary_output_field) {
      for (const field of this._output_fields) {
        if (field !== "cost" && field !== "charged_character_count") {
          this.primary_output_field = field;
          break;
        }
      }
    }
  }

  get_output_fields() {
    return this._output_fields;
  }

  special_validation(payload) {
    return [true, null]
  }
}

export default ServiceIO;
