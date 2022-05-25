(function() {
  "use strict";

  // Can use React.createElements with 3 arguments (type, properties and content)
  // But better to use JSX directly, with Babel

  const ProductImage = (props) => {
    return <img src="../../../assets/red.jpg" alt="Shoe" />;
  }

  // Element to be rendered, 3 arguments, what type of elt we are creating, props we are gonna passed into this elt, and whatever should be in this elt
  const ProductCustomizer = (props) => {
    return (
      // Can't use class but className
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
      </div>
    );
  }


  // ReactDOM.render takes two arguments: element to be rendered and where the element should go
  ReactDOM.render(<ProductCustomizer />, document.getElementById('react-root'));
})();
