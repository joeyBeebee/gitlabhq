export default class ProtectedTagAccessDropdown {
  constructor(options) {
    this.options = options;
    this.initDropdown();
  }

  initDropdown() {
    const { onSelect } = this.options;
    this.options.$dropdown.glDropdown({
      data: this.options.data,
      selectable: true,
      inputId: this.options.$dropdown.data('input-id'),
      fieldName: this.options.$dropdown.data('field-name'),
      toggleLabel(item, el) {
        if (el.is('.is-active')) {
          return item.text;
        }
        return 'Select';
      },
      clicked(item, $el, e) {
        e.preventDefault();
        onSelect();
      },
    });
  }
}
