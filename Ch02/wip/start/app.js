(function() {
  "use strict";

  const ProductImage = (props) => {

    return React.createElement('img', {
      src: "../../../assets/red.jpg",
      alt: "Shoe"
    });
  }
  // Element to rendered, 3 arguments, what type of elt we are creating, props we are gonna passed into this elt, and whatever should be in this elt
  const ProductCustomizer = (props) => {
    return React.createElement(
      'div',
      { className: "customizer" },
      React.createElement('div', { className: 'product-image' }, React.createElement(ProductImage))
    );
  };


  // ReactDOM.render takes two arguments: element to be rendered and where the element should go
  ReactDOM.render(
    React.createElement(ProductCustomizer),
    document.getElementById('react-root')
  );
})();
