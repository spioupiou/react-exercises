(function() {
  "use strict";

  // Element to rendered, 3 arguments, what type of elt we are creating, props we are gonna passed into this elt, and whatever should be in this elt
  var ProductCustomizer = React.createElement(
    'div',
    { className: "customizer" },
    "Product customizer will go here"
  );

  // ReactDOM.render takes two arguments: element to be rendered and where the element should go
  ReactDOM.render(ProductCustomizer, document.getElementById('react-root'));
})();
