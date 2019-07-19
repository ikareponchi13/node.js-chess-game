(function() {
  var initializing = false,
  superPattern = // Determine if functions can be serialized
    /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;

  // Creates a new Class that inherits from this class
  Object.subClass = function(properties) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var proto = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in properties) {
      // Check if we're overwriting an existing function
      proto[name] = typeof properties[name] == "function" &&
                    typeof _super[name] == "function" &&
                    superPattern.test(properties[name]) ?
          (function(name, fn) {
            
          })
    }
  }
})