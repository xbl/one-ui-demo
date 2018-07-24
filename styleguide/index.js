import { defineComponent } from 'one-ui';

class MyDom {
  get tagName() {
    return 'my-abc';
  };

  get props() {
    return {
      abc: String
    }
  }

  data() {
    return {
      name: '谢小呆',
      age: 2,
      abc: 7777,
      children: {
          name: 'hello',
          age: 1
      }
    };
  }

  get template() {
    return `
      <div>
        <h3>hi {{ name }} age: {{ age + 1 }} {{ abc }}</h3>
        <ul>
          <li>age: {{ age + 1}}</li>
          <li><button @click='sub'>-</button><button @click='add'>+</button></li>
          <li>children.name: {{ children.name }}</li>
          <li>children.age: {{ children.age < 2 ? 'A': 'B' }}</li>
          <li><button @click='subChildrenAge'>-</button><button @click='addChildrenAge'>+</button></li>
          <li><button @click='changeName'> change name !</button></li>
          <li><button @click='changeName2'> change name !</button></li>
        </ul>
      </div>
    `;
  };
  
  get methods() {
    return {
      add: function() {
        this.data.age++;
      },
      sub: function() {
        this.data.age--;
      },
      changeName: function() {
        this.data.name = 'hello!'
      },
      changeName2: function() {
        this.data.children.name = 'helloABC!'
      },
      addChildrenAge: function() {
        this.data.children.age++;
      },
      subChildrenAge: function() {
        this.data.children.age--;
      },
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name + ':' + newValue);
  };
}
defineComponent(MyDom);