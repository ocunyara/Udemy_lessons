
let count = 0;

const app = {
  title: 'App title',
  subtitle: 'Put your in the handle of a computer',
  options: [1, 2, 4 ,5 ,6 ,3]
};

const showAlert = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = ''
  }
  console.log(app.options);
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const options = app.options[randomNum];
  console.log(options);
};

const removeLastItem = () => {
  app.options.splice(-1);
  render();
};

const render = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      <h3>{app.subtitle}</h3>
      <ul>
        {
          app.options.map((option, item) => <li key={item}>{option}</li>
          )
        }
      </ul>
      <button disabled={app.options.length >= 2 ? false : true} onClick={ onMakeDecision }>What should i do?</button>
      <button onClick={removeLastItem}>Remove last item</button>
      <form onSubmit={ showAlert }>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );


  let appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};

render();