
import fs from 'fs';

export default class XHeader {
  get tagName() {
    return 'x-header';
  }
  get props() {
    return {
      abc: String
    }
  }

  data() {
    return {
      name: '谢小呆',
      age: 18,
      children: {
        name: 'hello',
        age: 1
      }
    };
  }

  get template() {
    return fs.readFileSync(__dirname + '/header.html', 'utf8');
  };

  get style() {
    return fs.readFileSync(__dirname + '/header.css', 'utf8');
  }

  get methods() {
    return {
      logo: function() {
        // alert('logo');
        this.$emit('logo', {a: 1});
      },
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name + ':' + newValue);
  };
}
