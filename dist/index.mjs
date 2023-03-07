var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/inversify/lib/constants/metadata_keys.js
var require_metadata_keys = __commonJS({
  "../../node_modules/inversify/lib/constants/metadata_keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NON_CUSTOM_TAG_KEYS = exports.PRE_DESTROY = exports.POST_CONSTRUCT = exports.DESIGN_PARAM_TYPES = exports.PARAM_TYPES = exports.TAGGED_PROP = exports.TAGGED = exports.MULTI_INJECT_TAG = exports.INJECT_TAG = exports.OPTIONAL_TAG = exports.UNMANAGED_TAG = exports.NAME_TAG = exports.NAMED_TAG = void 0;
    exports.NAMED_TAG = "named";
    exports.NAME_TAG = "name";
    exports.UNMANAGED_TAG = "unmanaged";
    exports.OPTIONAL_TAG = "optional";
    exports.INJECT_TAG = "inject";
    exports.MULTI_INJECT_TAG = "multi_inject";
    exports.TAGGED = "inversify:tagged";
    exports.TAGGED_PROP = "inversify:tagged_props";
    exports.PARAM_TYPES = "inversify:paramtypes";
    exports.DESIGN_PARAM_TYPES = "design:paramtypes";
    exports.POST_CONSTRUCT = "post_construct";
    exports.PRE_DESTROY = "pre_destroy";
    function getNonCustomTagKeys() {
      return [
        exports.INJECT_TAG,
        exports.MULTI_INJECT_TAG,
        exports.NAME_TAG,
        exports.UNMANAGED_TAG,
        exports.NAMED_TAG,
        exports.OPTIONAL_TAG
      ];
    }
    exports.NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
  }
});

// ../../node_modules/inversify/lib/constants/literal_types.js
var require_literal_types = __commonJS({
  "../../node_modules/inversify/lib/constants/literal_types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = void 0;
    var BindingScopeEnum = {
      Request: "Request",
      Singleton: "Singleton",
      Transient: "Transient"
    };
    exports.BindingScopeEnum = BindingScopeEnum;
    var BindingTypeEnum = {
      ConstantValue: "ConstantValue",
      Constructor: "Constructor",
      DynamicValue: "DynamicValue",
      Factory: "Factory",
      Function: "Function",
      Instance: "Instance",
      Invalid: "Invalid",
      Provider: "Provider"
    };
    exports.BindingTypeEnum = BindingTypeEnum;
    var TargetTypeEnum = {
      ClassProperty: "ClassProperty",
      ConstructorArgument: "ConstructorArgument",
      Variable: "Variable"
    };
    exports.TargetTypeEnum = TargetTypeEnum;
  }
});

// ../../node_modules/inversify/lib/utils/id.js
var require_id = __commonJS({
  "../../node_modules/inversify/lib/utils/id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.id = void 0;
    var idCounter = 0;
    function id() {
      return idCounter++;
    }
    exports.id = id;
  }
});

// ../../node_modules/inversify/lib/bindings/binding.js
var require_binding = __commonJS({
  "../../node_modules/inversify/lib/bindings/binding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Binding = void 0;
    var literal_types_1 = require_literal_types();
    var id_1 = require_id();
    var Binding = function() {
      function Binding2(serviceIdentifier, scope) {
        this.id = (0, id_1.id)();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = literal_types_1.BindingTypeEnum.Invalid;
        this.constraint = function(request) {
          return true;
        };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.onDeactivation = null;
        this.dynamicValue = null;
      }
      Binding2.prototype.clone = function() {
        var clone = new Binding2(this.serviceIdentifier, this.scope);
        clone.activated = clone.scope === literal_types_1.BindingScopeEnum.Singleton ? this.activated : false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.onDeactivation = this.onDeactivation;
        clone.cache = this.cache;
        return clone;
      };
      return Binding2;
    }();
    exports.Binding = Binding;
  }
});

// ../../node_modules/inversify/lib/constants/error_msgs.js
var require_error_msgs = __commonJS({
  "../../node_modules/inversify/lib/constants/error_msgs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STACK_OVERFLOW = exports.CIRCULAR_DEPENDENCY_IN_FACTORY = exports.ON_DEACTIVATION_ERROR = exports.PRE_DESTROY_ERROR = exports.POST_CONSTRUCT_ERROR = exports.ASYNC_UNBIND_REQUIRED = exports.MULTIPLE_POST_CONSTRUCT_METHODS = exports.MULTIPLE_PRE_DESTROY_METHODS = exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = exports.ARGUMENTS_LENGTH_MISMATCH = exports.INVALID_DECORATOR_OPERATION = exports.INVALID_TO_SELF_VALUE = exports.LAZY_IN_SYNC = exports.INVALID_FUNCTION_BINDING = exports.INVALID_MIDDLEWARE_RETURN = exports.NO_MORE_SNAPSHOTS_AVAILABLE = exports.INVALID_BINDING_TYPE = exports.NOT_IMPLEMENTED = exports.CIRCULAR_DEPENDENCY = exports.UNDEFINED_INJECT_ANNOTATION = exports.MISSING_INJECT_ANNOTATION = exports.MISSING_INJECTABLE_ANNOTATION = exports.NOT_REGISTERED = exports.CANNOT_UNBIND = exports.AMBIGUOUS_MATCH = exports.KEY_NOT_FOUND = exports.NULL_ARGUMENT = exports.DUPLICATED_METADATA = exports.DUPLICATED_INJECTABLE_DECORATOR = void 0;
    exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
    exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
    exports.NULL_ARGUMENT = "NULL argument";
    exports.KEY_NOT_FOUND = "Key Not Found";
    exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
    exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
    exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
    exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
    exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
    var UNDEFINED_INJECT_ANNOTATION = function(name) {
      return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
    };
    exports.UNDEFINED_INJECT_ANNOTATION = UNDEFINED_INJECT_ANNOTATION;
    exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
    exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
    exports.INVALID_BINDING_TYPE = "Invalid binding type:";
    exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
    exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
    exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
    var LAZY_IN_SYNC = function(key) {
      return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
    };
    exports.LAZY_IN_SYNC = LAZY_IN_SYNC;
    exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
    exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
    var ARGUMENTS_LENGTH_MISMATCH = function() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
    };
    exports.ARGUMENTS_LENGTH_MISMATCH = ARGUMENTS_LENGTH_MISMATCH;
    exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
    exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').";
    exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
    exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
    exports.MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
    exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
    exports.ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
    var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
      return "@postConstruct error in class " + clazz + ": " + errorMessage;
    };
    exports.POST_CONSTRUCT_ERROR = POST_CONSTRUCT_ERROR;
    var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
      return "@preDestroy error in class " + clazz + ": " + errorMessage;
    };
    exports.PRE_DESTROY_ERROR = PRE_DESTROY_ERROR;
    var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
      return "onDeactivation() error in class " + clazz + ": " + errorMessage;
    };
    exports.ON_DEACTIVATION_ERROR = ON_DEACTIVATION_ERROR;
    var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
      return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with" + ("service identifier '" + serviceIdentifier + "'.");
    };
    exports.CIRCULAR_DEPENDENCY_IN_FACTORY = CIRCULAR_DEPENDENCY_IN_FACTORY;
    exports.STACK_OVERFLOW = "Maximum call stack size exceeded";
  }
});

// ../../node_modules/inversify/lib/planning/metadata_reader.js
var require_metadata_reader = __commonJS({
  "../../node_modules/inversify/lib/planning/metadata_reader.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetadataReader = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var MetadataReader = function() {
      function MetadataReader2() {
      }
      MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
        return {
          compilerGeneratedMetadata,
          userGeneratedMetadata: userGeneratedMetadata || {}
        };
      };
      MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
      };
      return MetadataReader2;
    }();
    exports.MetadataReader = MetadataReader;
  }
});

// ../../node_modules/inversify/lib/bindings/binding_count.js
var require_binding_count = __commonJS({
  "../../node_modules/inversify/lib/bindings/binding_count.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingCount = void 0;
    var BindingCount = {
      MultipleBindingsAvailable: 2,
      NoBindingsAvailable: 0,
      OnlyOneBindingAvailable: 1
    };
    exports.BindingCount = BindingCount;
  }
});

// ../../node_modules/inversify/lib/utils/exceptions.js
var require_exceptions = __commonJS({
  "../../node_modules/inversify/lib/utils/exceptions.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tryAndThrowErrorIfStackOverflow = exports.isStackOverflowExeption = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    function isStackOverflowExeption(error) {
      return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
    }
    exports.isStackOverflowExeption = isStackOverflowExeption;
    var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
      try {
        return fn();
      } catch (error) {
        if (isStackOverflowExeption(error)) {
          error = errorCallback();
        }
        throw error;
      }
    };
    exports.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
  }
});

// ../../node_modules/inversify/lib/utils/serialization.js
var require_serialization = __commonJS({
  "../../node_modules/inversify/lib/utils/serialization.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSymbolDescription = exports.circularDependencyToException = exports.listMetadataForTarget = exports.listRegisteredBindingsForServiceIdentifier = exports.getServiceIdentifierAsString = exports.getFunctionName = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    function getServiceIdentifierAsString(serviceIdentifier) {
      if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
      } else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
      } else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
      }
    }
    exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
    function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
      var registeredBindingsList = "";
      var registeredBindings = getBindings(container, serviceIdentifier);
      if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function(binding) {
          var name = "Object";
          if (binding.implementationType !== null) {
            name = getFunctionName(binding.implementationType);
          }
          registeredBindingsList = registeredBindingsList + "\n " + name;
          if (binding.constraint.metaData) {
            registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
          }
        });
      }
      return registeredBindingsList;
    }
    exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
    function alreadyDependencyChain(request, serviceIdentifier) {
      if (request.parentRequest === null) {
        return false;
      } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
      } else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
      }
    }
    function dependencyChainToString(request) {
      function _createStringArr(req, result) {
        if (result === void 0) {
          result = [];
        }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
          return _createStringArr(req.parentRequest, result);
        }
        return result;
      }
      var stringArr = _createStringArr(request);
      return stringArr.reverse().join(" --> ");
    }
    function circularDependencyToException(request) {
      request.childRequests.forEach(function(childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
          var services = dependencyChainToString(childRequest);
          throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
        } else {
          circularDependencyToException(childRequest);
        }
      });
    }
    exports.circularDependencyToException = circularDependencyToException;
    function listMetadataForTarget(serviceIdentifierString, target) {
      if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
          m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
          otherTags.forEach(function(tag) {
            m_1 += tag.toString() + "\n";
          });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
      } else {
        return " " + serviceIdentifierString;
      }
    }
    exports.listMetadataForTarget = listMetadataForTarget;
    function getFunctionName(func) {
      if (func.name) {
        return func.name;
      } else {
        var name_1 = func.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
      }
    }
    exports.getFunctionName = getFunctionName;
    function getSymbolDescription(symbol) {
      return symbol.toString().slice(7, -1);
    }
    exports.getSymbolDescription = getSymbolDescription;
  }
});

// ../../node_modules/inversify/lib/planning/context.js
var require_context = __commonJS({
  "../../node_modules/inversify/lib/planning/context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Context = void 0;
    var id_1 = require_id();
    var Context = function() {
      function Context2(container) {
        this.id = (0, id_1.id)();
        this.container = container;
      }
      Context2.prototype.addPlan = function(plan) {
        this.plan = plan;
      };
      Context2.prototype.setCurrentRequest = function(currentRequest) {
        this.currentRequest = currentRequest;
      };
      return Context2;
    }();
    exports.Context = Context;
  }
});

// ../../node_modules/inversify/lib/planning/metadata.js
var require_metadata = __commonJS({
  "../../node_modules/inversify/lib/planning/metadata.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Metadata = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var Metadata = function() {
      function Metadata2(key, value) {
        this.key = key;
        this.value = value;
      }
      Metadata2.prototype.toString = function() {
        if (this.key === METADATA_KEY.NAMED_TAG) {
          return "named: " + String(this.value).toString() + " ";
        } else {
          return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
        }
      };
      return Metadata2;
    }();
    exports.Metadata = Metadata;
  }
});

// ../../node_modules/inversify/lib/planning/plan.js
var require_plan = __commonJS({
  "../../node_modules/inversify/lib/planning/plan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plan = void 0;
    var Plan = function() {
      function Plan2(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
      }
      return Plan2;
    }();
    exports.Plan = Plan;
  }
});

// ../../node_modules/inversify/lib/annotation/lazy_service_identifier.js
var require_lazy_service_identifier = __commonJS({
  "../../node_modules/inversify/lib/annotation/lazy_service_identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyServiceIdentifer = void 0;
    var LazyServiceIdentifer = function() {
      function LazyServiceIdentifer2(cb) {
        this._cb = cb;
      }
      LazyServiceIdentifer2.prototype.unwrap = function() {
        return this._cb();
      };
      return LazyServiceIdentifer2;
    }();
    exports.LazyServiceIdentifer = LazyServiceIdentifer;
  }
});

// ../../node_modules/inversify/lib/planning/queryable_string.js
var require_queryable_string = __commonJS({
  "../../node_modules/inversify/lib/planning/queryable_string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueryableString = void 0;
    var QueryableString = function() {
      function QueryableString2(str) {
        this.str = str;
      }
      QueryableString2.prototype.startsWith = function(searchString) {
        return this.str.indexOf(searchString) === 0;
      };
      QueryableString2.prototype.endsWith = function(searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
      };
      QueryableString2.prototype.contains = function(searchString) {
        return this.str.indexOf(searchString) !== -1;
      };
      QueryableString2.prototype.equals = function(compareString) {
        return this.str === compareString;
      };
      QueryableString2.prototype.value = function() {
        return this.str;
      };
      return QueryableString2;
    }();
    exports.QueryableString = QueryableString;
  }
});

// ../../node_modules/inversify/lib/planning/target.js
var require_target = __commonJS({
  "../../node_modules/inversify/lib/planning/target.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Target = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var id_1 = require_id();
    var serialization_1 = require_serialization();
    var metadata_1 = require_metadata();
    var queryable_string_1 = require_queryable_string();
    var Target = function() {
      function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
        this.id = (0, id_1.id)();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        var queryableName = typeof identifier === "symbol" ? (0, serialization_1.getSymbolDescription)(identifier) : identifier;
        this.name = new queryable_string_1.QueryableString(queryableName || "");
        this.identifier = identifier;
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
          metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
        } else if (namedOrTagged instanceof metadata_1.Metadata) {
          metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
          this.metadata.push(metadataItem);
        }
      }
      Target2.prototype.hasTag = function(key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
          var m = _a[_i];
          if (m.key === key) {
            return true;
          }
        }
        return false;
      };
      Target2.prototype.isArray = function() {
        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
      };
      Target2.prototype.matchesArray = function(name) {
        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
      };
      Target2.prototype.isNamed = function() {
        return this.hasTag(METADATA_KEY.NAMED_TAG);
      };
      Target2.prototype.isTagged = function() {
        return this.metadata.some(function(metadata) {
          return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
            return metadata.key !== key;
          });
        });
      };
      Target2.prototype.isOptional = function() {
        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
      };
      Target2.prototype.getNamedTag = function() {
        if (this.isNamed()) {
          return this.metadata.filter(function(m) {
            return m.key === METADATA_KEY.NAMED_TAG;
          })[0];
        }
        return null;
      };
      Target2.prototype.getCustomTags = function() {
        if (this.isTagged()) {
          return this.metadata.filter(function(metadata) {
            return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
              return metadata.key !== key;
            });
          });
        } else {
          return null;
        }
      };
      Target2.prototype.matchesNamedTag = function(name) {
        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
      };
      Target2.prototype.matchesTag = function(key) {
        var _this = this;
        return function(value) {
          for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key && m.value === value) {
              return true;
            }
          }
          return false;
        };
      };
      return Target2;
    }();
    exports.Target = Target;
  }
});

// ../../node_modules/inversify/lib/planning/reflection_utils.js
var require_reflection_utils = __commonJS({
  "../../node_modules/inversify/lib/planning/reflection_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFunctionName = exports.getBaseClassDependencyCount = exports.getDependencies = void 0;
    var lazy_service_identifier_1 = require_lazy_service_identifier();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var serialization_1 = require_serialization();
    Object.defineProperty(exports, "getFunctionName", { enumerable: true, get: function() {
      return serialization_1.getFunctionName;
    } });
    var target_1 = require_target();
    function getDependencies(metadataReader, func) {
      var constructorName = (0, serialization_1.getFunctionName)(func);
      return getTargets(metadataReader, constructorName, func, false);
    }
    exports.getDependencies = getDependencies;
    function getTargets(metadataReader, constructorName, func, isBaseClass) {
      var metadata = metadataReader.getConstructorMetadata(func);
      var serviceIdentifiers = metadata.compilerGeneratedMetadata;
      if (serviceIdentifiers === void 0) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
      }
      var constructorArgsMetadata = metadata.userGeneratedMetadata;
      var keys = Object.keys(constructorArgsMetadata);
      var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
      var hasOptionalParameters = keys.length > func.length;
      var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
      var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
      var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
      var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
      return targets;
    }
    function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
      var targetMetadata = constructorArgsMetadata[index.toString()] || [];
      var metadata = formatTargetMetadata(targetMetadata);
      var isManaged = metadata.unmanaged !== true;
      var serviceIdentifier = serviceIdentifiers[index];
      var injectIdentifier = metadata.inject || metadata.multiInject;
      serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
      if (serviceIdentifier instanceof lazy_service_identifier_1.LazyServiceIdentifer) {
        serviceIdentifier = serviceIdentifier.unwrap();
      }
      if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === void 0;
        var isUnknownType = isObject || isFunction || isUndefined;
        if (!isBaseClass && isUnknownType) {
          var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
          throw new Error(msg);
        }
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
      }
      return null;
    }
    function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
      var targets = [];
      for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
          targets.push(target);
        }
      }
      return targets;
    }
    function _getServiceIdentifierForProperty(inject, multiInject, propertyName, className) {
      var serviceIdentifier = inject || multiInject;
      if (serviceIdentifier === void 0) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
        throw new Error(msg);
      }
      return serviceIdentifier;
    }
    function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
      var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
      var targets = [];
      var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
      var stringKeys = Object.keys(classPropsMetadata);
      var keys = stringKeys.concat(symbolKeys);
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(targetMetadata);
        var identifier = metadata.targetName || key;
        var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
      }
      var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
      if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
        targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
      }
      return targets;
    }
    function getBaseClassDependencyCount(metadataReader, func) {
      var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
      if (baseConstructor !== Object) {
        var baseConstructorName = (0, serialization_1.getFunctionName)(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function(t) {
          return t.metadata.filter(function(m) {
            return m.key === METADATA_KEY.UNMANAGED_TAG;
          });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
          return dependencyCount;
        } else {
          return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
      } else {
        return 0;
      }
    }
    exports.getBaseClassDependencyCount = getBaseClassDependencyCount;
    function formatTargetMetadata(targetMetadata) {
      var targetMetadataMap = {};
      targetMetadata.forEach(function(m) {
        targetMetadataMap[m.key.toString()] = m.value;
      });
      return {
        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
      };
    }
  }
});

// ../../node_modules/inversify/lib/planning/request.js
var require_request = __commonJS({
  "../../node_modules/inversify/lib/planning/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Request = void 0;
    var id_1 = require_id();
    var Request = function() {
      function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.id = (0, id_1.id)();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = Array.isArray(bindings) ? bindings : [bindings];
        this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
      }
      Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
        var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
      };
      return Request2;
    }();
    exports.Request = Request;
  }
});

// ../../node_modules/inversify/lib/planning/planner.js
var require_planner = __commonJS({
  "../../node_modules/inversify/lib/planning/planner.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBindingDictionary = exports.createMockRequest = exports.plan = void 0;
    var binding_count_1 = require_binding_count();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var exceptions_1 = require_exceptions();
    var serialization_1 = require_serialization();
    var context_1 = require_context();
    var metadata_1 = require_metadata();
    var plan_1 = require_plan();
    var reflection_utils_1 = require_reflection_utils();
    var request_1 = require_request();
    var target_1 = require_target();
    function getBindingDictionary(cntnr) {
      return cntnr._bindingDictionary;
    }
    exports.getBindingDictionary = getBindingDictionary;
    function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
      var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
      var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
      var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
      if (key !== void 0) {
        var tagMetadata = new metadata_1.Metadata(key, value);
        target.metadata.push(tagMetadata);
      }
      return target;
    }
    function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
      var bindings = getBindings(context.container, target.serviceIdentifier);
      var activeBindings = [];
      if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
      }
      if (!avoidConstraints) {
        activeBindings = bindings.filter(function(binding) {
          var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
          return binding.constraint(request);
        });
      } else {
        activeBindings = bindings;
      }
      _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
      return activeBindings;
    }
    function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
      switch (bindings.length) {
        case binding_count_1.BindingCount.NoBindingsAvailable:
          if (target.isOptional()) {
            return bindings;
          } else {
            var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
            var msg = ERROR_MSGS.NOT_REGISTERED;
            msg += (0, serialization_1.listMetadataForTarget)(serviceIdentifierString, target);
            msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
            throw new Error(msg);
          }
        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
          return bindings;
        case binding_count_1.BindingCount.MultipleBindingsAvailable:
        default:
          if (!target.isArray()) {
            var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
            var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
            msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
            throw new Error(msg);
          } else {
            return bindings;
          }
      }
    }
    function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
      var activeBindings;
      var childRequest;
      if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new plan_1.Plan(context, childRequest);
        context.addPlan(thePlan);
      } else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
      }
      activeBindings.forEach(function(binding) {
        var subChildRequest = null;
        if (target.isArray()) {
          subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        } else {
          if (binding.cache) {
            return;
          }
          subChildRequest = childRequest;
        }
        if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
          var dependencies = (0, reflection_utils_1.getDependencies)(metadataReader, binding.implementationType);
          if (!context.container.options.skipBaseClassChecks) {
            var baseClassDependencyCount = (0, reflection_utils_1.getBaseClassDependencyCount)(metadataReader, binding.implementationType);
            if (dependencies.length < baseClassDependencyCount) {
              var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH((0, reflection_utils_1.getFunctionName)(binding.implementationType));
              throw new Error(error);
            }
          }
          dependencies.forEach(function(dependency) {
            _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
          });
        }
      });
    }
    function getBindings(container, serviceIdentifier) {
      var bindings = [];
      var bindingDictionary = getBindingDictionary(container);
      if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
      } else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
      }
      return bindings;
    }
    function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
      if (avoidConstraints === void 0) {
        avoidConstraints = false;
      }
      var context = new context_1.Context(container);
      var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
      try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
      } catch (error) {
        if ((0, exceptions_1.isStackOverflowExeption)(error)) {
          (0, serialization_1.circularDependencyToException)(context.plan.rootRequest);
        }
        throw error;
      }
    }
    exports.plan = plan;
    function createMockRequest(container, serviceIdentifier, key, value) {
      var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
      var context = new context_1.Context(container);
      var request = new request_1.Request(serviceIdentifier, context, null, [], target);
      return request;
    }
    exports.createMockRequest = createMockRequest;
  }
});

// ../../node_modules/inversify/lib/utils/async.js
var require_async = __commonJS({
  "../../node_modules/inversify/lib/utils/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromiseOrContainsPromise = exports.isPromise = void 0;
    function isPromise(object) {
      var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
      return isObjectOrFunction && typeof object.then === "function";
    }
    exports.isPromise = isPromise;
    function isPromiseOrContainsPromise(object) {
      if (isPromise(object)) {
        return true;
      }
      return Array.isArray(object) && object.some(isPromise);
    }
    exports.isPromiseOrContainsPromise = isPromiseOrContainsPromise;
  }
});

// ../../node_modules/inversify/lib/scope/scope.js
var require_scope = __commonJS({
  "../../node_modules/inversify/lib/scope/scope.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.saveToScope = exports.tryGetFromScope = void 0;
    var inversify_1 = require_inversify();
    var async_1 = require_async();
    var tryGetFromScope = function(requestScope, binding) {
      if (binding.scope === inversify_1.BindingScopeEnum.Singleton && binding.activated) {
        return binding.cache;
      }
      if (binding.scope === inversify_1.BindingScopeEnum.Request && requestScope.has(binding.id)) {
        return requestScope.get(binding.id);
      }
      return null;
    };
    exports.tryGetFromScope = tryGetFromScope;
    var saveToScope = function(requestScope, binding, result) {
      if (binding.scope === inversify_1.BindingScopeEnum.Singleton) {
        _saveToSingletonScope(binding, result);
      }
      if (binding.scope === inversify_1.BindingScopeEnum.Request) {
        _saveToRequestScope(requestScope, binding, result);
      }
    };
    exports.saveToScope = saveToScope;
    var _saveToRequestScope = function(requestScope, binding, result) {
      if (!requestScope.has(binding.id)) {
        requestScope.set(binding.id, result);
      }
    };
    var _saveToSingletonScope = function(binding, result) {
      binding.cache = result;
      binding.activated = true;
      if ((0, async_1.isPromise)(result)) {
        void _saveAsyncResultToSingletonScope(binding, result);
      }
    };
    var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result, ex_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4, asyncResult];
            case 1:
              result = _a.sent();
              binding.cache = result;
              return [3, 3];
            case 2:
              ex_1 = _a.sent();
              binding.cache = null;
              binding.activated = false;
              throw ex_1;
            case 3:
              return [2];
          }
        });
      });
    };
  }
});

// ../../node_modules/inversify/lib/utils/factory_type.js
var require_factory_type = __commonJS({
  "../../node_modules/inversify/lib/utils/factory_type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FactoryType = void 0;
    var FactoryType;
    (function(FactoryType2) {
      FactoryType2["DynamicValue"] = "toDynamicValue";
      FactoryType2["Factory"] = "toFactory";
      FactoryType2["Provider"] = "toProvider";
    })(FactoryType = exports.FactoryType || (exports.FactoryType = {}));
  }
});

// ../../node_modules/inversify/lib/utils/binding_utils.js
var require_binding_utils = __commonJS({
  "../../node_modules/inversify/lib/utils/binding_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFactoryDetails = exports.ensureFullyBound = exports.multiBindToService = void 0;
    var inversify_1 = require_inversify();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var factory_type_1 = require_factory_type();
    var multiBindToService = function(container) {
      return function(service) {
        return function() {
          var types = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
          }
          return types.forEach(function(t) {
            return container.bind(t).toService(service);
          });
        };
      };
    };
    exports.multiBindToService = multiBindToService;
    var ensureFullyBound = function(binding) {
      var boundValue = null;
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.ConstantValue:
        case literal_types_1.BindingTypeEnum.Function:
          boundValue = binding.cache;
          break;
        case literal_types_1.BindingTypeEnum.Constructor:
        case literal_types_1.BindingTypeEnum.Instance:
          boundValue = binding.implementationType;
          break;
        case literal_types_1.BindingTypeEnum.DynamicValue:
          boundValue = binding.dynamicValue;
          break;
        case literal_types_1.BindingTypeEnum.Provider:
          boundValue = binding.provider;
          break;
        case literal_types_1.BindingTypeEnum.Factory:
          boundValue = binding.factory;
          break;
      }
      if (boundValue === null) {
        var serviceIdentifierAsString = (0, inversify_1.getServiceIdentifierAsString)(binding.serviceIdentifier);
        throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
      }
    };
    exports.ensureFullyBound = ensureFullyBound;
    var getFactoryDetails = function(binding) {
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.Factory:
          return { factory: binding.factory, factoryType: factory_type_1.FactoryType.Factory };
        case literal_types_1.BindingTypeEnum.Provider:
          return { factory: binding.provider, factoryType: factory_type_1.FactoryType.Provider };
        case literal_types_1.BindingTypeEnum.DynamicValue:
          return { factory: binding.dynamicValue, factoryType: factory_type_1.FactoryType.DynamicValue };
        default:
          throw new Error("Unexpected factory type " + binding.type);
      }
    };
    exports.getFactoryDetails = getFactoryDetails;
  }
});

// ../../node_modules/inversify/lib/resolution/instantiation.js
var require_instantiation = __commonJS({
  "../../node_modules/inversify/lib/resolution/instantiation.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveInstance = void 0;
    var error_msgs_1 = require_error_msgs();
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var async_1 = require_async();
    function _resolveRequests(childRequests, resolveRequest) {
      return childRequests.reduce(function(resolvedRequests, childRequest) {
        var injection = resolveRequest(childRequest);
        var targetType = childRequest.target.type;
        if (targetType === literal_types_1.TargetTypeEnum.ConstructorArgument) {
          resolvedRequests.constructorInjections.push(injection);
        } else {
          resolvedRequests.propertyRequests.push(childRequest);
          resolvedRequests.propertyInjections.push(injection);
        }
        if (!resolvedRequests.isAsync) {
          resolvedRequests.isAsync = (0, async_1.isPromiseOrContainsPromise)(injection);
        }
        return resolvedRequests;
      }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
    }
    function _createInstance(constr, childRequests, resolveRequest) {
      var result;
      if (childRequests.length > 0) {
        var resolved = _resolveRequests(childRequests, resolveRequest);
        var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
        if (resolved.isAsync) {
          result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
        } else {
          result = createInstanceWithInjections(createInstanceWithInjectionsArg);
        }
      } else {
        result = new constr();
      }
      return result;
    }
    function createInstanceWithInjections(args) {
      var _a;
      var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray([void 0], args.constructorInjections, false)))();
      args.propertyRequests.forEach(function(r, index) {
        var property = r.target.identifier;
        var injection = args.propertyInjections[index];
        instance[property] = injection;
      });
      return instance;
    }
    function createInstanceWithInjectionsAsync(args) {
      return __awaiter(this, void 0, void 0, function() {
        var constructorInjections, propertyInjections;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, possiblyWaitInjections(args.constructorInjections)];
            case 1:
              constructorInjections = _a.sent();
              return [4, possiblyWaitInjections(args.propertyInjections)];
            case 2:
              propertyInjections = _a.sent();
              return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
          }
        });
      });
    }
    function possiblyWaitInjections(possiblePromiseinjections) {
      return __awaiter(this, void 0, void 0, function() {
        var injections, _i, possiblePromiseinjections_1, injection;
        return __generator(this, function(_a) {
          injections = [];
          for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
            injection = possiblePromiseinjections_1[_i];
            if (Array.isArray(injection)) {
              injections.push(Promise.all(injection));
            } else {
              injections.push(injection);
            }
          }
          return [2, Promise.all(injections)];
        });
      });
    }
    function _getInstanceAfterPostConstruct(constr, result) {
      var postConstructResult = _postConstruct(constr, result);
      if ((0, async_1.isPromise)(postConstructResult)) {
        return postConstructResult.then(function() {
          return result;
        });
      } else {
        return result;
      }
    }
    function _postConstruct(constr, instance) {
      var _a, _b;
      if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
          return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
        } catch (e) {
          throw new Error((0, error_msgs_1.POST_CONSTRUCT_ERROR)(constr.name, e.message));
        }
      }
    }
    function _validateInstanceResolution(binding, constr) {
      if (binding.scope !== literal_types_1.BindingScopeEnum.Singleton) {
        _throwIfHandlingDeactivation(binding, constr);
      }
    }
    function _throwIfHandlingDeactivation(binding, constr) {
      var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === literal_types_1.BindingScopeEnum.Request ? "request" : "transient") + " scope.";
      if (typeof binding.onDeactivation === "function") {
        throw new Error((0, error_msgs_1.ON_DEACTIVATION_ERROR)(constr.name, scopeErrorMessage));
      }
      if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constr)) {
        throw new Error((0, error_msgs_1.PRE_DESTROY_ERROR)(constr.name, scopeErrorMessage));
      }
    }
    function resolveInstance(binding, constr, childRequests, resolveRequest) {
      _validateInstanceResolution(binding, constr);
      var result = _createInstance(constr, childRequests, resolveRequest);
      if ((0, async_1.isPromise)(result)) {
        return result.then(function(resolvedResult) {
          return _getInstanceAfterPostConstruct(constr, resolvedResult);
        });
      } else {
        return _getInstanceAfterPostConstruct(constr, result);
      }
    }
    exports.resolveInstance = resolveInstance;
  }
});

// ../../node_modules/inversify/lib/resolution/resolver.js
var require_resolver = __commonJS({
  "../../node_modules/inversify/lib/resolution/resolver.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolve = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var planner_1 = require_planner();
    var scope_1 = require_scope();
    var async_1 = require_async();
    var binding_utils_1 = require_binding_utils();
    var exceptions_1 = require_exceptions();
    var instantiation_1 = require_instantiation();
    var _resolveRequest = function(requestScope) {
      return function(request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
          return childRequests.map(function(childRequest) {
            var _f = _resolveRequest(requestScope);
            return _f(childRequest);
          });
        } else {
          if (request.target.isOptional() && bindings.length === 0) {
            return void 0;
          }
          var binding = bindings[0];
          return _resolveBinding(requestScope, request, binding);
        }
      };
    };
    var _resolveFactoryFromBinding = function(binding, context) {
      var factoryDetails = (0, binding_utils_1.getFactoryDetails)(binding);
      return (0, exceptions_1.tryAndThrowErrorIfStackOverflow)(function() {
        return factoryDetails.factory.bind(binding)(context);
      }, function() {
        return new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
      });
    };
    var _getResolvedFromBinding = function(requestScope, request, binding) {
      var result;
      var childRequests = request.childRequests;
      (0, binding_utils_1.ensureFullyBound)(binding);
      switch (binding.type) {
        case literal_types_1.BindingTypeEnum.ConstantValue:
        case literal_types_1.BindingTypeEnum.Function:
          result = binding.cache;
          break;
        case literal_types_1.BindingTypeEnum.Constructor:
          result = binding.implementationType;
          break;
        case literal_types_1.BindingTypeEnum.Instance:
          result = (0, instantiation_1.resolveInstance)(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
          break;
        default:
          result = _resolveFactoryFromBinding(binding, request.parentContext);
      }
      return result;
    };
    var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
      var result = (0, scope_1.tryGetFromScope)(requestScope, binding);
      if (result !== null) {
        return result;
      }
      result = resolveFromBinding();
      (0, scope_1.saveToScope)(requestScope, binding, result);
      return result;
    };
    var _resolveBinding = function(requestScope, request, binding) {
      return _resolveInScope(requestScope, binding, function() {
        var result = _getResolvedFromBinding(requestScope, request, binding);
        if ((0, async_1.isPromise)(result)) {
          result = result.then(function(resolved) {
            return _onActivation(request, binding, resolved);
          });
        } else {
          result = _onActivation(request, binding, result);
        }
        return result;
      });
    };
    function _onActivation(request, binding, resolved) {
      var result = _bindingActivation(request.parentContext, binding, resolved);
      var containersIterator = _getContainersIterator(request.parentContext.container);
      var container;
      var containersIteratorResult = containersIterator.next();
      do {
        container = containersIteratorResult.value;
        var context_1 = request.parentContext;
        var serviceIdentifier = request.serviceIdentifier;
        var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
        if ((0, async_1.isPromise)(result)) {
          result = _activateContainerAsync(activationsIterator, context_1, result);
        } else {
          result = _activateContainer(activationsIterator, context_1, result);
        }
        containersIteratorResult = containersIterator.next();
      } while (containersIteratorResult.done !== true && !(0, planner_1.getBindingDictionary)(container).hasKey(request.serviceIdentifier));
      return result;
    }
    var _bindingActivation = function(context, binding, previousResult) {
      var result;
      if (typeof binding.onActivation === "function") {
        result = binding.onActivation(context, previousResult);
      } else {
        result = previousResult;
      }
      return result;
    };
    var _activateContainer = function(activationsIterator, context, result) {
      var activation = activationsIterator.next();
      while (!activation.done) {
        result = activation.value(context, result);
        if ((0, async_1.isPromise)(result)) {
          return _activateContainerAsync(activationsIterator, context, result);
        }
        activation = activationsIterator.next();
      }
      return result;
    };
    var _activateContainerAsync = function(activationsIterator, context, resultPromise) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result, activation;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, resultPromise];
            case 1:
              result = _a.sent();
              activation = activationsIterator.next();
              _a.label = 2;
            case 2:
              if (!!activation.done)
                return [3, 4];
              return [4, activation.value(context, result)];
            case 3:
              result = _a.sent();
              activation = activationsIterator.next();
              return [3, 2];
            case 4:
              return [2, result];
          }
        });
      });
    };
    var _getContainerActivationsForService = function(container, serviceIdentifier) {
      var activations = container._activations;
      return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
    };
    var _getContainersIterator = function(container) {
      var containersStack = [container];
      var parent = container.parent;
      while (parent !== null) {
        containersStack.push(parent);
        parent = parent.parent;
      }
      var getNextContainer = function() {
        var nextContainer = containersStack.pop();
        if (nextContainer !== void 0) {
          return { done: false, value: nextContainer };
        } else {
          return { done: true, value: void 0 };
        }
      };
      var containersIterator = {
        next: getNextContainer
      };
      return containersIterator;
    };
    function resolve(context) {
      var _f = _resolveRequest(context.plan.rootRequest.requestScope);
      return _f(context.plan.rootRequest);
    }
    exports.resolve = resolve;
  }
});

// ../../node_modules/inversify/lib/syntax/constraint_helpers.js
var require_constraint_helpers = __commonJS({
  "../../node_modules/inversify/lib/syntax/constraint_helpers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var traverseAncerstors = function(request, constraint) {
      var parent = request.parentRequest;
      if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
      } else {
        return false;
      }
    };
    exports.traverseAncerstors = traverseAncerstors;
    var taggedConstraint = function(key) {
      return function(value) {
        var constraint = function(request) {
          return request !== null && request.target !== null && request.target.matchesTag(key)(value);
        };
        constraint.metaData = new metadata_1.Metadata(key, value);
        return constraint;
      };
    };
    exports.taggedConstraint = taggedConstraint;
    var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
    exports.namedConstraint = namedConstraint;
    var typeConstraint = function(type) {
      return function(request) {
        var binding = null;
        if (request !== null) {
          binding = request.bindings[0];
          if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
          } else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
          }
        }
        return false;
      };
    };
    exports.typeConstraint = typeConstraint;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_when_syntax.js
var require_binding_when_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_when_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingWhenSyntax = void 0;
    var binding_on_syntax_1 = require_binding_on_syntax();
    var constraint_helpers_1 = require_constraint_helpers();
    var BindingWhenSyntax = function() {
      function BindingWhenSyntax2(binding) {
        this._binding = binding;
      }
      BindingWhenSyntax2.prototype.when = function(constraint) {
        this._binding.constraint = constraint;
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
        this._binding.constraint = (0, constraint_helpers_1.namedConstraint)(name);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
        this._binding.constraint = function(request) {
          if (request === null) {
            return false;
          }
          var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
          return targetIsDefault;
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
        this._binding.constraint = (0, constraint_helpers_1.taggedConstraint)(tag)(value);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.typeConstraint)(parent)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.namedConstraint)(name)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.taggedConstraint)(tag)(value)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        this._binding.constraint = function(request) {
          return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        this._binding.constraint = function(request) {
          return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
      };
      return BindingWhenSyntax2;
    }();
    exports.BindingWhenSyntax = BindingWhenSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_on_syntax.js
var require_binding_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingOnSyntax = void 0;
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingOnSyntax = function() {
      function BindingOnSyntax2(binding) {
        this._binding = binding;
      }
      BindingOnSyntax2.prototype.onActivation = function(handler) {
        this._binding.onActivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
      };
      BindingOnSyntax2.prototype.onDeactivation = function(handler) {
        this._binding.onDeactivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
      };
      return BindingOnSyntax2;
    }();
    exports.BindingOnSyntax = BindingOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js
var require_binding_when_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingWhenOnSyntax = void 0;
    var binding_on_syntax_1 = require_binding_on_syntax();
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingWhenOnSyntax = function() {
      function BindingWhenOnSyntax2(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
      }
      BindingWhenOnSyntax2.prototype.when = function(constraint) {
        return this._bindingWhenSyntax.when(constraint);
      };
      BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
        return this._bindingWhenSyntax.whenTargetIsDefault();
      };
      BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
      };
      BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
      };
      BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
      };
      BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
      };
      BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
        return this._bindingOnSyntax.onActivation(handler);
      };
      BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
      };
      return BindingWhenOnSyntax2;
    }();
    exports.BindingWhenOnSyntax = BindingWhenOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_in_syntax.js
var require_binding_in_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_in_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingInSyntax = void 0;
    var literal_types_1 = require_literal_types();
    var binding_when_on_syntax_1 = require_binding_when_on_syntax();
    var BindingInSyntax = function() {
      function BindingInSyntax2(binding) {
        this._binding = binding;
      }
      BindingInSyntax2.prototype.inRequestScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Request;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingInSyntax2.prototype.inSingletonScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingInSyntax2.prototype.inTransientScope = function() {
        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      return BindingInSyntax2;
    }();
    exports.BindingInSyntax = BindingInSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js
var require_binding_in_when_on_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingInWhenOnSyntax = void 0;
    var binding_in_syntax_1 = require_binding_in_syntax();
    var binding_on_syntax_1 = require_binding_on_syntax();
    var binding_when_syntax_1 = require_binding_when_syntax();
    var BindingInWhenOnSyntax = function() {
      function BindingInWhenOnSyntax2(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
      }
      BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
        return this._bindingInSyntax.inRequestScope();
      };
      BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
        return this._bindingInSyntax.inSingletonScope();
      };
      BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
        return this._bindingInSyntax.inTransientScope();
      };
      BindingInWhenOnSyntax2.prototype.when = function(constraint) {
        return this._bindingWhenSyntax.when(constraint);
      };
      BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
        return this._bindingWhenSyntax.whenTargetIsDefault();
      };
      BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
      };
      BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
      };
      BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
      };
      BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
      };
      BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
        return this._bindingOnSyntax.onActivation(handler);
      };
      BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
        return this._bindingOnSyntax.onDeactivation(handler);
      };
      return BindingInWhenOnSyntax2;
    }();
    exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;
  }
});

// ../../node_modules/inversify/lib/syntax/binding_to_syntax.js
var require_binding_to_syntax = __commonJS({
  "../../node_modules/inversify/lib/syntax/binding_to_syntax.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindingToSyntax = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var binding_in_when_on_syntax_1 = require_binding_in_when_on_syntax();
    var binding_when_on_syntax_1 = require_binding_when_on_syntax();
    var BindingToSyntax = function() {
      function BindingToSyntax2(binding) {
        this._binding = binding;
      }
      BindingToSyntax2.prototype.to = function(constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toSelf = function() {
        if (typeof this._binding.serviceIdentifier !== "function") {
          throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
      };
      BindingToSyntax2.prototype.toConstantValue = function(value) {
        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toDynamicValue = function(func) {
        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toConstructor = function(constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toFactory = function(factory) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = factory;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toFunction = function(func) {
        if (typeof func !== "function") {
          throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = literal_types_1.BindingTypeEnum.Function;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return bindingWhenOnSyntax;
      };
      BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function(context) {
          var autofactory = function() {
            return context.container.get(serviceIdentifier);
          };
          return autofactory;
        };
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function(context) {
          return function(named) {
            return context.container.getNamed(serviceIdentifier, named);
          };
        };
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toProvider = function(provider) {
        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
        this._binding.provider = provider;
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
      };
      BindingToSyntax2.prototype.toService = function(service) {
        this.toDynamicValue(function(context) {
          return context.container.get(service);
        });
      };
      return BindingToSyntax2;
    }();
    exports.BindingToSyntax = BindingToSyntax;
  }
});

// ../../node_modules/inversify/lib/container/container_snapshot.js
var require_container_snapshot = __commonJS({
  "../../node_modules/inversify/lib/container/container_snapshot.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContainerSnapshot = void 0;
    var ContainerSnapshot = function() {
      function ContainerSnapshot2() {
      }
      ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
        var snapshot = new ContainerSnapshot2();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        snapshot.deactivations = deactivations;
        snapshot.activations = activations;
        snapshot.moduleActivationStore = moduleActivationStore;
        return snapshot;
      };
      return ContainerSnapshot2;
    }();
    exports.ContainerSnapshot = ContainerSnapshot;
  }
});

// ../../node_modules/inversify/lib/utils/clonable.js
var require_clonable = __commonJS({
  "../../node_modules/inversify/lib/utils/clonable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isClonable = void 0;
    function isClonable(obj) {
      return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
    }
    exports.isClonable = isClonable;
  }
});

// ../../node_modules/inversify/lib/container/lookup.js
var require_lookup = __commonJS({
  "../../node_modules/inversify/lib/container/lookup.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Lookup = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var clonable_1 = require_clonable();
    var Lookup = function() {
      function Lookup2() {
        this._map = /* @__PURE__ */ new Map();
      }
      Lookup2.prototype.getMap = function() {
        return this._map;
      };
      Lookup2.prototype.add = function(serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (value === null || value === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== void 0) {
          entry.push(value);
        } else {
          this._map.set(serviceIdentifier, [value]);
        }
      };
      Lookup2.prototype.get = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== void 0) {
          return entry;
        } else {
          throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
      };
      Lookup2.prototype.remove = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
          throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
      };
      Lookup2.prototype.removeIntersection = function(lookup) {
        var _this = this;
        this.traverse(function(serviceIdentifier, value) {
          var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
          if (lookupActivations !== void 0) {
            var filteredValues = value.filter(function(lookupValue) {
              return !lookupActivations.some(function(moduleActivation) {
                return lookupValue === moduleActivation;
              });
            });
            _this._setValue(serviceIdentifier, filteredValues);
          }
        });
      };
      Lookup2.prototype.removeByCondition = function(condition) {
        var _this = this;
        var removals = [];
        this._map.forEach(function(entries, key) {
          var updatedEntries = [];
          for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            var remove = condition(entry);
            if (remove) {
              removals.push(entry);
            } else {
              updatedEntries.push(entry);
            }
          }
          _this._setValue(key, updatedEntries);
        });
        return removals;
      };
      Lookup2.prototype.hasKey = function(serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === void 0) {
          throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
      };
      Lookup2.prototype.clone = function() {
        var copy = new Lookup2();
        this._map.forEach(function(value, key) {
          value.forEach(function(b) {
            return copy.add(key, (0, clonable_1.isClonable)(b) ? b.clone() : b);
          });
        });
        return copy;
      };
      Lookup2.prototype.traverse = function(func) {
        this._map.forEach(function(value, key) {
          func(key, value);
        });
      };
      Lookup2.prototype._setValue = function(serviceIdentifier, value) {
        if (value.length > 0) {
          this._map.set(serviceIdentifier, value);
        } else {
          this._map.delete(serviceIdentifier);
        }
      };
      return Lookup2;
    }();
    exports.Lookup = Lookup;
  }
});

// ../../node_modules/inversify/lib/container/module_activation_store.js
var require_module_activation_store = __commonJS({
  "../../node_modules/inversify/lib/container/module_activation_store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleActivationStore = void 0;
    var lookup_1 = require_lookup();
    var ModuleActivationStore = function() {
      function ModuleActivationStore2() {
        this._map = /* @__PURE__ */ new Map();
      }
      ModuleActivationStore2.prototype.remove = function(moduleId) {
        if (this._map.has(moduleId)) {
          var handlers = this._map.get(moduleId);
          this._map.delete(moduleId);
          return handlers;
        }
        return this._getEmptyHandlersStore();
      };
      ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
        this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
      };
      ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
        this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
      };
      ModuleActivationStore2.prototype.clone = function() {
        var clone = new ModuleActivationStore2();
        this._map.forEach(function(handlersStore, moduleId) {
          clone._map.set(moduleId, {
            onActivations: handlersStore.onActivations.clone(),
            onDeactivations: handlersStore.onDeactivations.clone()
          });
        });
        return clone;
      };
      ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
        var moduleActivationHandlers = this._map.get(moduleId);
        if (moduleActivationHandlers === void 0) {
          moduleActivationHandlers = this._getEmptyHandlersStore();
          this._map.set(moduleId, moduleActivationHandlers);
        }
        return moduleActivationHandlers;
      };
      ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
        var handlersStore = {
          onActivations: new lookup_1.Lookup(),
          onDeactivations: new lookup_1.Lookup()
        };
        return handlersStore;
      };
      return ModuleActivationStore2;
    }();
    exports.ModuleActivationStore = ModuleActivationStore;
  }
});

// ../../node_modules/inversify/lib/container/container.js
var require_container = __commonJS({
  "../../node_modules/inversify/lib/container/container.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Container = void 0;
    var binding_1 = require_binding();
    var ERROR_MSGS = __importStar(require_error_msgs());
    var literal_types_1 = require_literal_types();
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_reader_1 = require_metadata_reader();
    var planner_1 = require_planner();
    var resolver_1 = require_resolver();
    var binding_to_syntax_1 = require_binding_to_syntax();
    var async_1 = require_async();
    var id_1 = require_id();
    var serialization_1 = require_serialization();
    var container_snapshot_1 = require_container_snapshot();
    var lookup_1 = require_lookup();
    var module_activation_store_1 = require_module_activation_store();
    var Container = function() {
      function Container2(containerOptions) {
        var options = containerOptions || {};
        if (typeof options !== "object") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
        }
        if (options.defaultScope === void 0) {
          options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
        } else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton && options.defaultScope !== literal_types_1.BindingScopeEnum.Transient && options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
        }
        if (options.autoBindInjectable === void 0) {
          options.autoBindInjectable = false;
        } else if (typeof options.autoBindInjectable !== "boolean") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
        }
        if (options.skipBaseClassChecks === void 0) {
          options.skipBaseClassChecks = false;
        } else if (typeof options.skipBaseClassChecks !== "boolean") {
          throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
        }
        this.options = {
          autoBindInjectable: options.autoBindInjectable,
          defaultScope: options.defaultScope,
          skipBaseClassChecks: options.skipBaseClassChecks
        };
        this.id = (0, id_1.id)();
        this._bindingDictionary = new lookup_1.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this._activations = new lookup_1.Lookup();
        this._deactivations = new lookup_1.Lookup();
        this.parent = null;
        this._metadataReader = new metadata_reader_1.MetadataReader();
        this._moduleActivationStore = new module_activation_store_1.ModuleActivationStore();
      }
      Container2.merge = function(container1, container2) {
        var containers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          containers[_i - 2] = arguments[_i];
        }
        var container = new Container2();
        var targetContainers = __spreadArray([container1, container2], containers, true).map(function(targetContainer) {
          return (0, planner_1.getBindingDictionary)(targetContainer);
        });
        var bindingDictionary = (0, planner_1.getBindingDictionary)(container);
        function copyDictionary(origin, destination) {
          origin.traverse(function(_key, value) {
            value.forEach(function(binding) {
              destination.add(binding.serviceIdentifier, binding.clone());
            });
          });
        }
        targetContainers.forEach(function(targetBindingDictionary) {
          copyDictionary(targetBindingDictionary, bindingDictionary);
        });
        return container;
      };
      Container2.prototype.load = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        var getHelpers = this._getContainerModuleHelpersFactory();
        for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
          var currentModule = modules_1[_a];
          var containerModuleHelpers = getHelpers(currentModule.id);
          currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
        }
      };
      Container2.prototype.loadAsync = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                getHelpers = this._getContainerModuleHelpersFactory();
                _a = 0, modules_2 = modules;
                _b.label = 1;
              case 1:
                if (!(_a < modules_2.length))
                  return [3, 4];
                currentModule = modules_2[_a];
                containerModuleHelpers = getHelpers(currentModule.id);
                return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
              case 2:
                _b.sent();
                _b.label = 3;
              case 3:
                _a++;
                return [3, 1];
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype.unload = function() {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        modules.forEach(function(module2) {
          var deactivations = _this._removeModuleBindings(module2.id);
          _this._deactivateSingletons(deactivations);
          _this._removeModuleHandlers(module2.id);
        });
      };
      Container2.prototype.unloadAsync = function() {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function() {
          var _a, modules_3, module_1, deactivations;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _a = 0, modules_3 = modules;
                _b.label = 1;
              case 1:
                if (!(_a < modules_3.length))
                  return [3, 4];
                module_1 = modules_3[_a];
                deactivations = this._removeModuleBindings(module_1.id);
                return [4, this._deactivateSingletonsAsync(deactivations)];
              case 2:
                _b.sent();
                this._removeModuleHandlers(module_1.id);
                _b.label = 3;
              case 3:
                _a++;
                return [3, 1];
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype.bind = function(serviceIdentifier) {
        var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
        var binding = new binding_1.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new binding_to_syntax_1.BindingToSyntax(binding);
      };
      Container2.prototype.rebind = function(serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
      };
      Container2.prototype.rebindAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, this.unbindAsync(serviceIdentifier)];
              case 1:
                _a.sent();
                return [2, this.bind(serviceIdentifier)];
            }
          });
        });
      };
      Container2.prototype.unbind = function(serviceIdentifier) {
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
          var bindings = this._bindingDictionary.get(serviceIdentifier);
          this._deactivateSingletons(bindings);
        }
        this._removeServiceFromDictionary(serviceIdentifier);
      };
      Container2.prototype.unbindAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          var bindings;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this._bindingDictionary.hasKey(serviceIdentifier))
                  return [3, 2];
                bindings = this._bindingDictionary.get(serviceIdentifier);
                return [4, this._deactivateSingletonsAsync(bindings)];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                this._removeServiceFromDictionary(serviceIdentifier);
                return [2];
            }
          });
        });
      };
      Container2.prototype.unbindAll = function() {
        var _this = this;
        this._bindingDictionary.traverse(function(_key, value) {
          _this._deactivateSingletons(value);
        });
        this._bindingDictionary = new lookup_1.Lookup();
      };
      Container2.prototype.unbindAllAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
          var promises;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                promises = [];
                this._bindingDictionary.traverse(function(_key, value) {
                  promises.push(_this._deactivateSingletonsAsync(value));
                });
                return [4, Promise.all(promises)];
              case 1:
                _a.sent();
                this._bindingDictionary = new lookup_1.Lookup();
                return [2];
            }
          });
        });
      };
      Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
        this._activations.add(serviceIdentifier, onActivation);
      };
      Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
        this._deactivations.add(serviceIdentifier, onDeactivation);
      };
      Container2.prototype.isBound = function(serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
          bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
      };
      Container2.prototype.isCurrentBound = function(serviceIdentifier) {
        return this._bindingDictionary.hasKey(serviceIdentifier);
      };
      Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
          var bindings = this._bindingDictionary.get(serviceIdentifier);
          var request_1 = (0, planner_1.createMockRequest)(this, serviceIdentifier, key, value);
          bound = bindings.some(function(b) {
            return b.constraint(request_1);
          });
        }
        if (!bound && this.parent) {
          bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
      };
      Container2.prototype.snapshot = function() {
        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
      };
      Container2.prototype.restore = function() {
        var snapshot = this._snapshots.pop();
        if (snapshot === void 0) {
          throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._activations = snapshot.activations;
        this._deactivations = snapshot.deactivations;
        this._middleware = snapshot.middleware;
        this._moduleActivationStore = snapshot.moduleActivationStore;
      };
      Container2.prototype.createChild = function(containerOptions) {
        var child = new Container2(containerOptions || this.options);
        child.parent = this;
        return child;
      };
      Container2.prototype.applyMiddleware = function() {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          middlewares[_i] = arguments[_i];
        }
        var initial = this._middleware ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function(prev, curr) {
          return curr(prev);
        }, initial);
      };
      Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
        this._metadataReader = metadataReader;
      };
      Container2.prototype.get = function(serviceIdentifier) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAsync = function(serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function() {
          var getArgs;
          return __generator(this, function(_a) {
            getArgs = this._getNotAllArgs(serviceIdentifier, false);
            return [2, this._get(getArgs)];
          });
        });
      };
      Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
        return __awaiter(this, void 0, void 0, function() {
          var getArgs;
          return __generator(this, function(_a) {
            getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
            return [2, this._get(getArgs)];
          });
        });
      };
      Container2.prototype.getNamed = function(serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getNamedAsync = function(serviceIdentifier, named) {
        return this.getTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getAll = function(serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAllAsync = function(serviceIdentifier) {
        var getArgs = this._getAllArgs(serviceIdentifier);
        return this._getAll(getArgs);
      };
      Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getButThrowIfAsync(getArgs);
      };
      Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
        var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
        return this._getAll(getArgs);
      };
      Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
        return this.getAllTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
      };
      Container2.prototype.resolve = function(constructorFunction) {
        var isBound = this.isBound(constructorFunction);
        if (!isBound) {
          this.bind(constructorFunction).toSelf();
        }
        var resolved = this.get(constructorFunction);
        if (!isBound) {
          this.unbind(constructorFunction);
        }
        return resolved;
      };
      Container2.prototype._preDestroy = function(constructor, instance) {
        if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constructor)) {
          var data = Reflect.getMetadata(METADATA_KEY.PRE_DESTROY, constructor);
          return instance[data.value]();
        }
      };
      Container2.prototype._removeModuleHandlers = function(moduleId) {
        var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
        this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
        this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
      };
      Container2.prototype._removeModuleBindings = function(moduleId) {
        return this._bindingDictionary.removeByCondition(function(binding) {
          return binding.moduleId === moduleId;
        });
      };
      Container2.prototype._deactivate = function(binding, instance) {
        var _this = this;
        var constructor = Object.getPrototypeOf(instance).constructor;
        try {
          if (this._deactivations.hasKey(binding.serviceIdentifier)) {
            var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
            if ((0, async_1.isPromise)(result)) {
              return this._handleDeactivationError(result.then(function() {
                return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
              }), constructor);
            }
          }
          var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
          if ((0, async_1.isPromise)(propagateDeactivationResult)) {
            return this._handleDeactivationError(propagateDeactivationResult, constructor);
          }
        } catch (ex) {
          throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex.message));
        }
      };
      Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          var ex_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, asyncResult];
              case 1:
                _a.sent();
                return [3, 3];
              case 2:
                ex_1 = _a.sent();
                throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
              case 3:
                return [2];
            }
          });
        });
      };
      Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
        var _this = this;
        var deactivation = deactivationsIterator.next();
        while (deactivation.value) {
          var result = deactivation.value(instance);
          if ((0, async_1.isPromise)(result)) {
            return result.then(function() {
              return _this._deactivateContainerAsync(instance, deactivationsIterator);
            });
          }
          deactivation = deactivationsIterator.next();
        }
      };
      Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
        return __awaiter(this, void 0, void 0, function() {
          var deactivation;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                deactivation = deactivationsIterator.next();
                _a.label = 1;
              case 1:
                if (!deactivation.value)
                  return [3, 3];
                return [4, deactivation.value(instance)];
              case 2:
                _a.sent();
                deactivation = deactivationsIterator.next();
                return [3, 1];
              case 3:
                return [2];
            }
          });
        });
      };
      Container2.prototype._getContainerModuleHelpersFactory = function() {
        var _this = this;
        var setModuleId = function(bindingToSyntax, moduleId) {
          bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function(moduleId) {
          return function(serviceIdentifier) {
            var bindingToSyntax = _this.bind(serviceIdentifier);
            setModuleId(bindingToSyntax, moduleId);
            return bindingToSyntax;
          };
        };
        var getUnbindFunction = function() {
          return function(serviceIdentifier) {
            return _this.unbind(serviceIdentifier);
          };
        };
        var getUnbindAsyncFunction = function() {
          return function(serviceIdentifier) {
            return _this.unbindAsync(serviceIdentifier);
          };
        };
        var getIsboundFunction = function() {
          return function(serviceIdentifier) {
            return _this.isBound(serviceIdentifier);
          };
        };
        var getRebindFunction = function(moduleId) {
          return function(serviceIdentifier) {
            var bindingToSyntax = _this.rebind(serviceIdentifier);
            setModuleId(bindingToSyntax, moduleId);
            return bindingToSyntax;
          };
        };
        var getOnActivationFunction = function(moduleId) {
          return function(serviceIdentifier, onActivation) {
            _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
            _this.onActivation(serviceIdentifier, onActivation);
          };
        };
        var getOnDeactivationFunction = function(moduleId) {
          return function(serviceIdentifier, onDeactivation) {
            _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
            _this.onDeactivation(serviceIdentifier, onDeactivation);
          };
        };
        return function(mId) {
          return {
            bindFunction: getBindFunction(mId),
            isboundFunction: getIsboundFunction(),
            onActivationFunction: getOnActivationFunction(mId),
            onDeactivationFunction: getOnDeactivationFunction(mId),
            rebindFunction: getRebindFunction(mId),
            unbindFunction: getUnbindFunction(),
            unbindAsyncFunction: getUnbindAsyncFunction()
          };
        };
      };
      Container2.prototype._getAll = function(getArgs) {
        return Promise.all(this._get(getArgs));
      };
      Container2.prototype._get = function(getArgs) {
        var planAndResolveArgs = __assign(__assign({}, getArgs), { contextInterceptor: function(context) {
          return context;
        }, targetType: literal_types_1.TargetTypeEnum.Variable });
        if (this._middleware) {
          var middlewareResult = this._middleware(planAndResolveArgs);
          if (middlewareResult === void 0 || middlewareResult === null) {
            throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
          }
          return middlewareResult;
        }
        return this._planAndResolve()(planAndResolveArgs);
      };
      Container2.prototype._getButThrowIfAsync = function(getArgs) {
        var result = this._get(getArgs);
        if ((0, async_1.isPromiseOrContainsPromise)(result)) {
          throw new Error(ERROR_MSGS.LAZY_IN_SYNC(getArgs.serviceIdentifier));
        }
        return result;
      };
      Container2.prototype._getAllArgs = function(serviceIdentifier) {
        var getAllArgs = {
          avoidConstraints: true,
          isMultiInject: true,
          serviceIdentifier
        };
        return getAllArgs;
      };
      Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
        var getNotAllArgs = {
          avoidConstraints: false,
          isMultiInject,
          serviceIdentifier,
          key,
          value
        };
        return getNotAllArgs;
      };
      Container2.prototype._planAndResolve = function() {
        var _this = this;
        return function(args) {
          var context = (0, planner_1.plan)(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
          context = args.contextInterceptor(context);
          var result = (0, resolver_1.resolve)(context);
          return result;
        };
      };
      Container2.prototype._deactivateIfSingleton = function(binding) {
        var _this = this;
        if (!binding.activated) {
          return;
        }
        if ((0, async_1.isPromise)(binding.cache)) {
          return binding.cache.then(function(resolved) {
            return _this._deactivate(binding, resolved);
          });
        }
        return this._deactivate(binding, binding.cache);
      };
      Container2.prototype._deactivateSingletons = function(bindings) {
        for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
          var binding = bindings_1[_i];
          var result = this._deactivateIfSingleton(binding);
          if ((0, async_1.isPromise)(result)) {
            throw new Error(ERROR_MSGS.ASYNC_UNBIND_REQUIRED);
          }
        }
      };
      Container2.prototype._deactivateSingletonsAsync = function(bindings) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, Promise.all(bindings.map(function(b) {
                  return _this._deactivateIfSingleton(b);
                }))];
              case 1:
                _a.sent();
                return [2];
            }
          });
        });
      };
      Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
        if (this.parent) {
          return this._deactivate.bind(this.parent)(binding, instance);
        } else {
          return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
        }
      };
      Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!this.parent)
                  return [3, 2];
                return [4, this._deactivate.bind(this.parent)(binding, instance)];
              case 1:
                _a.sent();
                return [3, 4];
              case 2:
                return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [2];
            }
          });
        });
      };
      Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
        try {
          this._bindingDictionary.remove(serviceIdentifier);
        } catch (e) {
          throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier));
        }
      };
      Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
        var _this = this;
        if (typeof binding.onDeactivation === "function") {
          var result = binding.onDeactivation(instance);
          if ((0, async_1.isPromise)(result)) {
            return result.then(function() {
              return _this._preDestroy(constructor, instance);
            });
          }
        }
        return this._preDestroy(constructor, instance);
      };
      Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!(typeof binding.onDeactivation === "function"))
                  return [3, 2];
                return [4, binding.onDeactivation(instance)];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                return [4, this._preDestroy(constructor, instance)];
              case 3:
                _a.sent();
                return [2];
            }
          });
        });
      };
      return Container2;
    }();
    exports.Container = Container;
  }
});

// ../../node_modules/inversify/lib/container/container_module.js
var require_container_module = __commonJS({
  "../../node_modules/inversify/lib/container/container_module.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncContainerModule = exports.ContainerModule = void 0;
    var id_1 = require_id();
    var ContainerModule2 = function() {
      function ContainerModule3(registry) {
        this.id = (0, id_1.id)();
        this.registry = registry;
      }
      return ContainerModule3;
    }();
    exports.ContainerModule = ContainerModule2;
    var AsyncContainerModule = function() {
      function AsyncContainerModule2(registry) {
        this.id = (0, id_1.id)();
        this.registry = registry;
      }
      return AsyncContainerModule2;
    }();
    exports.AsyncContainerModule = AsyncContainerModule;
  }
});

// ../../node_modules/inversify/lib/utils/js.js
var require_js = __commonJS({
  "../../node_modules/inversify/lib/utils/js.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFirstArrayDuplicate = void 0;
    function getFirstArrayDuplicate(array) {
      var seenValues = /* @__PURE__ */ new Set();
      for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var entry = array_1[_i];
        if (seenValues.has(entry)) {
          return entry;
        } else {
          seenValues.add(entry);
        }
      }
      return void 0;
    }
    exports.getFirstArrayDuplicate = getFirstArrayDuplicate;
  }
});

// ../../node_modules/inversify/lib/annotation/decorator_utils.js
var require_decorator_utils = __commonJS({
  "../../node_modules/inversify/lib/annotation/decorator_utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTaggedDecorator = exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
    var ERROR_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var js_1 = require_js();
    function targetIsConstructorFunction(target) {
      return target.prototype !== void 0;
    }
    function _throwIfMethodParameter(parameterName) {
      if (parameterName !== void 0) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
      }
    }
    function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
      _throwIfMethodParameter(parameterName);
      _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
    }
    exports.tagParameter = tagParameter;
    function tagProperty(annotationTarget, propertyName, metadata) {
      if (targetIsConstructorFunction(annotationTarget)) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
      }
      _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
    }
    exports.tagProperty = tagProperty;
    function _ensureNoMetadataKeyDuplicates(metadata) {
      var metadatas = [];
      if (Array.isArray(metadata)) {
        metadatas = metadata;
        var duplicate = (0, js_1.getFirstArrayDuplicate)(metadatas.map(function(md) {
          return md.key;
        }));
        if (duplicate !== void 0) {
          throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + duplicate.toString());
        }
      } else {
        metadatas = [metadata];
      }
      return metadatas;
    }
    function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
      var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
      var paramsOrPropertiesMetadata = {};
      if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
      }
      var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
      if (paramOrPropertyMetadata === void 0) {
        paramOrPropertyMetadata = [];
      } else {
        var _loop_1 = function(m2) {
          if (metadatas.some(function(md) {
            return md.key === m2.key;
          })) {
            throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m2.key.toString());
          }
        };
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
          var m = paramOrPropertyMetadata_1[_i];
          _loop_1(m);
        }
      }
      paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
      paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
      Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
    }
    function createTaggedDecorator(metadata) {
      return function(target, targetKey, indexOrPropertyDescriptor) {
        if (typeof indexOrPropertyDescriptor === "number") {
          tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
        } else {
          tagProperty(target, targetKey, metadata);
        }
      };
    }
    exports.createTaggedDecorator = createTaggedDecorator;
    function _decorate(decorators, target) {
      Reflect.decorate(decorators, target);
    }
    function _param(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function decorate(decorator, target, parameterIndexOrProperty) {
      if (typeof parameterIndexOrProperty === "number") {
        _decorate([_param(parameterIndexOrProperty, decorator)], target);
      } else if (typeof parameterIndexOrProperty === "string") {
        Reflect.decorate([decorator], target, parameterIndexOrProperty);
      } else {
        _decorate([decorator], target);
      }
    }
    exports.decorate = decorate;
  }
});

// ../../node_modules/inversify/lib/annotation/injectable.js
var require_injectable = __commonJS({
  "../../node_modules/inversify/lib/annotation/injectable.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectable = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    function injectable() {
      return function(target) {
        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
          throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
        return target;
      };
    }
    exports.injectable = injectable;
  }
});

// ../../node_modules/inversify/lib/annotation/tagged.js
var require_tagged = __commonJS({
  "../../node_modules/inversify/lib/annotation/tagged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tagged = void 0;
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function tagged(metadataKey, metadataValue) {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, metadataValue));
    }
    exports.tagged = tagged;
  }
});

// ../../node_modules/inversify/lib/annotation/named.js
var require_named = __commonJS({
  "../../node_modules/inversify/lib/annotation/named.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.named = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function named(name) {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
    }
    exports.named = named;
  }
});

// ../../node_modules/inversify/lib/annotation/inject_base.js
var require_inject_base = __commonJS({
  "../../node_modules/inversify/lib/annotation/inject_base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectBase = void 0;
    var error_msgs_1 = require_error_msgs();
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function injectBase(metadataKey) {
      return function(serviceIdentifier) {
        return function(target, targetKey, indexOrPropertyDescriptor) {
          if (serviceIdentifier === void 0) {
            var className = typeof target === "function" ? target.name : target.constructor.name;
            throw new Error((0, error_msgs_1.UNDEFINED_INJECT_ANNOTATION)(className));
          }
          return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
        };
      };
    }
    exports.injectBase = injectBase;
  }
});

// ../../node_modules/inversify/lib/annotation/inject.js
var require_inject = __commonJS({
  "../../node_modules/inversify/lib/annotation/inject.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inject = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var inject_base_1 = require_inject_base();
    var inject = (0, inject_base_1.injectBase)(METADATA_KEY.INJECT_TAG);
    exports.inject = inject;
  }
});

// ../../node_modules/inversify/lib/annotation/optional.js
var require_optional = __commonJS({
  "../../node_modules/inversify/lib/annotation/optional.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optional = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function optional() {
      return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
    }
    exports.optional = optional;
  }
});

// ../../node_modules/inversify/lib/annotation/unmanaged.js
var require_unmanaged = __commonJS({
  "../../node_modules/inversify/lib/annotation/unmanaged.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unmanaged = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function unmanaged() {
      return function(target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
        (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
      };
    }
    exports.unmanaged = unmanaged;
  }
});

// ../../node_modules/inversify/lib/annotation/multi_inject.js
var require_multi_inject = __commonJS({
  "../../node_modules/inversify/lib/annotation/multi_inject.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiInject = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var inject_base_1 = require_inject_base();
    var multiInject = (0, inject_base_1.injectBase)(METADATA_KEY.MULTI_INJECT_TAG);
    exports.multiInject = multiInject;
  }
});

// ../../node_modules/inversify/lib/annotation/target_name.js
var require_target_name = __commonJS({
  "../../node_modules/inversify/lib/annotation/target_name.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.targetName = void 0;
    var METADATA_KEY = __importStar(require_metadata_keys());
    var metadata_1 = require_metadata();
    var decorator_utils_1 = require_decorator_utils();
    function targetName(name) {
      return function(target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
        (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
      };
    }
    exports.targetName = targetName;
  }
});

// ../../node_modules/inversify/lib/annotation/property_event_decorator.js
var require_property_event_decorator = __commonJS({
  "../../node_modules/inversify/lib/annotation/property_event_decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.propertyEventDecorator = void 0;
    var metadata_1 = require_metadata();
    function propertyEventDecorator(eventKey, errorMessage) {
      return function() {
        return function(target, propertyKey) {
          var metadata = new metadata_1.Metadata(eventKey, propertyKey);
          if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
            throw new Error(errorMessage);
          }
          Reflect.defineMetadata(eventKey, metadata, target.constructor);
        };
      };
    }
    exports.propertyEventDecorator = propertyEventDecorator;
  }
});

// ../../node_modules/inversify/lib/annotation/post_construct.js
var require_post_construct = __commonJS({
  "../../node_modules/inversify/lib/annotation/post_construct.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postConstruct = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var property_event_decorator_1 = require_property_event_decorator();
    var postConstruct = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
    exports.postConstruct = postConstruct;
  }
});

// ../../node_modules/inversify/lib/annotation/pre_destroy.js
var require_pre_destroy = __commonJS({
  "../../node_modules/inversify/lib/annotation/pre_destroy.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preDestroy = void 0;
    var ERRORS_MSGS = __importStar(require_error_msgs());
    var METADATA_KEY = __importStar(require_metadata_keys());
    var property_event_decorator_1 = require_property_event_decorator();
    var preDestroy = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
    exports.preDestroy = preDestroy;
  }
});

// ../../node_modules/inversify/lib/interfaces/interfaces.js
var require_interfaces = __commonJS({
  "../../node_modules/inversify/lib/interfaces/interfaces.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interfaces = void 0;
    var interfaces2;
    (function(interfaces3) {
      ;
    })(interfaces2 || (interfaces2 = {}));
    exports.interfaces = interfaces2;
  }
});

// ../../node_modules/inversify/lib/inversify.js
var require_inversify = __commonJS({
  "../../node_modules/inversify/lib/inversify.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiBindToService = exports.getServiceIdentifierAsString = exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = exports.decorate = exports.interfaces = exports.id = exports.MetadataReader = exports.preDestroy = exports.postConstruct = exports.targetName = exports.multiInject = exports.unmanaged = exports.optional = exports.LazyServiceIdentifer = exports.inject = exports.named = exports.tagged = exports.injectable = exports.createTaggedDecorator = exports.ContainerModule = exports.AsyncContainerModule = exports.TargetTypeEnum = exports.BindingTypeEnum = exports.BindingScopeEnum = exports.Container = exports.METADATA_KEY = void 0;
    var keys = __importStar(require_metadata_keys());
    exports.METADATA_KEY = keys;
    var container_1 = require_container();
    Object.defineProperty(exports, "Container", { enumerable: true, get: function() {
      return container_1.Container;
    } });
    var literal_types_1 = require_literal_types();
    Object.defineProperty(exports, "BindingScopeEnum", { enumerable: true, get: function() {
      return literal_types_1.BindingScopeEnum;
    } });
    Object.defineProperty(exports, "BindingTypeEnum", { enumerable: true, get: function() {
      return literal_types_1.BindingTypeEnum;
    } });
    Object.defineProperty(exports, "TargetTypeEnum", { enumerable: true, get: function() {
      return literal_types_1.TargetTypeEnum;
    } });
    var container_module_1 = require_container_module();
    Object.defineProperty(exports, "AsyncContainerModule", { enumerable: true, get: function() {
      return container_module_1.AsyncContainerModule;
    } });
    Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function() {
      return container_module_1.ContainerModule;
    } });
    var decorator_utils_1 = require_decorator_utils();
    Object.defineProperty(exports, "createTaggedDecorator", { enumerable: true, get: function() {
      return decorator_utils_1.createTaggedDecorator;
    } });
    var injectable_1 = require_injectable();
    Object.defineProperty(exports, "injectable", { enumerable: true, get: function() {
      return injectable_1.injectable;
    } });
    var tagged_1 = require_tagged();
    Object.defineProperty(exports, "tagged", { enumerable: true, get: function() {
      return tagged_1.tagged;
    } });
    var named_1 = require_named();
    Object.defineProperty(exports, "named", { enumerable: true, get: function() {
      return named_1.named;
    } });
    var inject_1 = require_inject();
    Object.defineProperty(exports, "inject", { enumerable: true, get: function() {
      return inject_1.inject;
    } });
    var lazy_service_identifier_1 = require_lazy_service_identifier();
    Object.defineProperty(exports, "LazyServiceIdentifer", { enumerable: true, get: function() {
      return lazy_service_identifier_1.LazyServiceIdentifer;
    } });
    var optional_1 = require_optional();
    Object.defineProperty(exports, "optional", { enumerable: true, get: function() {
      return optional_1.optional;
    } });
    var unmanaged_1 = require_unmanaged();
    Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function() {
      return unmanaged_1.unmanaged;
    } });
    var multi_inject_1 = require_multi_inject();
    Object.defineProperty(exports, "multiInject", { enumerable: true, get: function() {
      return multi_inject_1.multiInject;
    } });
    var target_name_1 = require_target_name();
    Object.defineProperty(exports, "targetName", { enumerable: true, get: function() {
      return target_name_1.targetName;
    } });
    var post_construct_1 = require_post_construct();
    Object.defineProperty(exports, "postConstruct", { enumerable: true, get: function() {
      return post_construct_1.postConstruct;
    } });
    var pre_destroy_1 = require_pre_destroy();
    Object.defineProperty(exports, "preDestroy", { enumerable: true, get: function() {
      return pre_destroy_1.preDestroy;
    } });
    var metadata_reader_1 = require_metadata_reader();
    Object.defineProperty(exports, "MetadataReader", { enumerable: true, get: function() {
      return metadata_reader_1.MetadataReader;
    } });
    var id_1 = require_id();
    Object.defineProperty(exports, "id", { enumerable: true, get: function() {
      return id_1.id;
    } });
    var interfaces_1 = require_interfaces();
    Object.defineProperty(exports, "interfaces", { enumerable: true, get: function() {
      return interfaces_1.interfaces;
    } });
    var decorator_utils_2 = require_decorator_utils();
    Object.defineProperty(exports, "decorate", { enumerable: true, get: function() {
      return decorator_utils_2.decorate;
    } });
    var constraint_helpers_1 = require_constraint_helpers();
    Object.defineProperty(exports, "traverseAncerstors", { enumerable: true, get: function() {
      return constraint_helpers_1.traverseAncerstors;
    } });
    Object.defineProperty(exports, "taggedConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.taggedConstraint;
    } });
    Object.defineProperty(exports, "namedConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.namedConstraint;
    } });
    Object.defineProperty(exports, "typeConstraint", { enumerable: true, get: function() {
      return constraint_helpers_1.typeConstraint;
    } });
    var serialization_1 = require_serialization();
    Object.defineProperty(exports, "getServiceIdentifierAsString", { enumerable: true, get: function() {
      return serialization_1.getServiceIdentifierAsString;
    } });
    var binding_utils_1 = require_binding_utils();
    Object.defineProperty(exports, "multiBindToService", { enumerable: true, get: function() {
      return binding_utils_1.multiBindToService;
    } });
  }
});

// ../../node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "../../node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// src/index.ts
var import_inversify = __toESM(require_inversify(), 1);

// src/services/src/sscdNameSpace.ts
var SSCD = {};

// src/services/src/world.ts
SSCD.World = function(params) {
  this.__init_world(params);
};
SSCD.World.prototype = {
  __init_world: function(params) {
    params = params || {};
    params.grid_size = params.grid_size || 512;
    params.grid_error = params.grid_error !== void 0 ? params.grid_error : 2;
    this.__grid = {};
    this.__params = params;
    this.__all_shapes = {};
    this.__collision_tags = {};
    this.__next_coll_tag = 0;
  },
  __create_collision_tag: function(name) {
    if (this.__collision_tags[name]) {
      throw new SSCD.IllegalActionError("Collision tag named '" + name + "' already exist!");
    }
    this.__collision_tags[name] = 1 << this.__next_coll_tag++;
  },
  _ALL_TAGS_VAL: Number.MAX_SAFE_INTEGER || 4294967295,
  cleanup: function() {
    let rows = Object.keys(this.__grid);
    for (let _i = 0; _i < rows.length; ++_i) {
      let i = rows[_i];
      let columns = Object.keys(this.__grid[i]);
      for (let _j = 0; _j < columns.length; ++_j) {
        let j = columns[_j];
        if (this.__grid[i][j].length === 0) {
          delete this.__grid[i][j];
        }
      }
      if (Object.keys(this.__grid[i]).length === 0) {
        delete this.__grid[i];
      }
    }
  },
  __get_tags_value: function(tags) {
    if (tags === void 0) {
      return this._ALL_TAGS_VAL;
    }
    if (typeof tags === "string") {
      return this.__collision_tag(tags);
    }
    let ret = 0;
    for (let i = 0; i < tags.length; ++i) {
      ret |= this.__collision_tag(tags[i]);
    }
    return ret;
  },
  __collision_tag: function(name) {
    if (this.__collision_tags[name] === void 0) {
      this.__create_collision_tag(name);
    }
    return this.__collision_tags[name];
  },
  __get_grid_range: function(obj) {
    let aabb = obj.get_aabb();
    let min_i = Math.floor(aabb.position.x / this.__params.grid_size);
    let min_j = Math.floor(aabb.position.y / this.__params.grid_size);
    let max_i = Math.floor((aabb.position.x + aabb.size.x) / this.__params.grid_size);
    let max_j = Math.floor((aabb.position.y + aabb.size.y) / this.__params.grid_size);
    return {
      min_x: min_i,
      min_y: min_j,
      max_x: max_i,
      max_y: max_j
    };
  },
  add: function(obj) {
    if (obj.__world) {
      throw new SSCD.IllegalActionError("Object to add is already in a collision world!");
    }
    let grids = this.__get_grid_range(obj);
    for (let i = grids.min_x; i <= grids.max_x; ++i) {
      for (let j = grids.min_y; j <= grids.max_y; ++j) {
        this.__grid[i] = this.__grid[i] || {};
        this.__grid[i][j] = this.__grid[i][j] || [];
        let curr_grid_chunk = this.__grid[i][j];
        curr_grid_chunk.push(obj);
        obj.__grid_chunks.push(curr_grid_chunk);
      }
    }
    obj.__world = this;
    obj.__grid_bounderies = grids;
    obj.__last_insert_aabb = obj.get_aabb().clone();
    this.__all_shapes[obj.get_id()] = obj;
    return obj;
  },
  get_all_shapes: function() {
    let ret = [];
    for (let key in this.__all_shapes) {
      if (this.__all_shapes.hasOwnProperty(key)) {
        ret.push(this.__all_shapes[key]);
      }
    }
    return ret;
  },
  remove: function(obj) {
    if (obj.__world !== this) {
      throw new SSCD.IllegalActionError("Object to remove is not in this collision world!");
    }
    for (let i = 0; i < obj.__grid_chunks.length; ++i) {
      let grid_chunk = obj.__grid_chunks[i];
      for (let j = 0; j < grid_chunk.length; ++j) {
        if (grid_chunk[j] === obj) {
          grid_chunk.splice(j, 1);
          break;
        }
      }
    }
    delete this.__all_shapes[obj.get_id()];
    obj.__grid_chunks = [];
    obj.__world = null;
    obj.__grid_bounderies = null;
    obj.__last_insert_aabb = null;
  },
  __update_shape_grid: function(obj) {
    let curr_aabb = obj.get_aabb();
    if (this.__params.grid_error === 0 || (Math.abs(curr_aabb.position.x - obj.__last_insert_aabb.position.x) > this.__params.grid_error || Math.abs(curr_aabb.position.y - obj.__last_insert_aabb.position.y) > this.__params.grid_error || Math.abs(curr_aabb.size.x - obj.__last_insert_aabb.size.x) > this.__params.grid_error || Math.abs(curr_aabb.size.y - obj.__last_insert_aabb.size.y) > this.__params.grid_error)) {
      this.remove(obj);
      this.add(obj);
    }
  },
  pick_object: function(obj, collision_tags) {
    let outlist = [];
    if (this.test_collision(obj, collision_tags, outlist, 1)) {
      return outlist[0];
    }
    return null;
  },
  test_collision: function(obj, collision_tags, out_list, ret_objs_count) {
    collision_tags = this.__get_tags_value(collision_tags);
    if (obj instanceof SSCD.Vector) {
      return this.__test_collision_point(obj, collision_tags, out_list, ret_objs_count);
    }
    if (obj.is_shape) {
      return this.__test_collision_shape(obj, collision_tags, out_list, ret_objs_count);
    }
  },
  test_fov: function(position, distance, direction, fov_angle, collision_tags, out_list) {
    collision_tags = this.__get_tags_value(collision_tags);
    out_list = out_list || [];
    let circle = new SSCD.Circle(position, distance);
    this.__test_collision_shape(circle, collision_tags, out_list, null);
    for (let i = out_list.length - 1; i >= 0; --i) {
      let angle = position.angle_from(out_list[i].__position);
      if (SSCD.Math.angles_dis(direction, angle) > fov_angle) {
        out_list.splice(i, 1);
      }
    }
    return out_list.length > 0;
  },
  __test_collision_point: function(vector, collision_tags_val, out_list, ret_objs_count) {
    let grid_size = this.__params.grid_size;
    let i = Math.floor(vector.x / grid_size);
    let j = Math.floor(vector.y / grid_size);
    if (this.__grid[i] === void 0 || this.__grid[i][j] === void 0) {
      return false;
    }
    let grid_chunk = this.__grid[i][j];
    let found = 0;
    for (let i2 = 0; i2 < grid_chunk.length; ++i2) {
      let curr_obj = grid_chunk[i2];
      if (!curr_obj.collision_tags_match(collision_tags_val)) {
        continue;
      }
      if (this.__do_collision(curr_obj, vector)) {
        if (out_list) {
          found++;
          out_list.push(curr_obj);
          if (ret_objs_count && found >= ret_objs_count) {
            return true;
          }
        } else {
          return true;
        }
      }
    }
    return found > 0;
  },
  __test_collision_shape: function(obj, collision_tags_val, out_list, ret_objs_count) {
    let grid;
    if (obj.__world === this) {
      grid = obj.__grid_bounderies;
    } else {
      grid = this.__get_grid_range(obj);
    }
    let found = 0;
    let already_tests = {};
    for (let i = grid.min_x; i <= grid.max_x; ++i) {
      if (this.__grid[i] === void 0) {
        continue;
      }
      for (let j = grid.min_y; j <= grid.max_y; ++j) {
        let curr_grid_chunk = this.__grid[i][j];
        if (curr_grid_chunk === void 0) {
          continue;
        }
        for (let x = 0; x < curr_grid_chunk.length; ++x) {
          let curr_obj = curr_grid_chunk[x];
          if (curr_obj === obj) {
            continue;
          }
          if (already_tests[curr_obj.get_id()]) {
            continue;
          }
          already_tests[curr_obj.get_id()] = true;
          if (!curr_obj.collision_tags_match(collision_tags_val)) {
            continue;
          }
          if (this.__do_collision(curr_obj, obj)) {
            if (out_list) {
              found++;
              out_list.push(curr_obj);
              if (ret_objs_count && found >= ret_objs_count) {
                return true;
              }
            } else {
              return true;
            }
          }
        }
      }
    }
    return found > 0;
  },
  __do_collision: function(src, target) {
    return src.test_collide_with(target);
  },
  render: function(canvas, camera_pos, show_grid, show_aabb) {
    camera_pos = camera_pos || SSCD.Vector.ZERO;
    if (show_grid === void 0) {
      show_grid = true;
    }
    if (show_aabb === void 0) {
      show_aabb = true;
    }
    let ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    let grid_size = this.__params.grid_size;
    let min_i = Math.floor(camera_pos.x / grid_size);
    let min_j = Math.floor(camera_pos.y / grid_size);
    let max_i = min_i + Math.ceil(canvas.width / grid_size);
    let max_j = min_j + Math.ceil(canvas.height / grid_size);
    let render_list = [];
    for (let i = min_i; i <= max_i; ++i) {
      for (let j = min_j; j <= max_j; ++j) {
        let curr_grid_chunk = void 0;
        if (this.__grid[i]) {
          curr_grid_chunk = this.__grid[i][j];
        }
        if (show_grid) {
          let position = new SSCD.Vector(i * grid_size, j * grid_size).sub_self(camera_pos);
          ctx.beginPath();
          ctx.rect(position.x, position.y, grid_size - 1, grid_size - 1);
          ctx.lineWidth = "1";
          if (curr_grid_chunk === void 0 || curr_grid_chunk.length === 0) {
            ctx.strokeStyle = "rgba(100, 100, 100, 0.255)";
          } else {
            ctx.strokeStyle = "rgba(255, 0, 0, 0.3)";
          }
          ctx.stroke();
        }
        if (curr_grid_chunk === void 0) {
          continue;
        }
        for (let x = 0; x < curr_grid_chunk.length; ++x) {
          let curr_obj = curr_grid_chunk[x];
          if (render_list.indexOf(curr_obj) === -1) {
            render_list.push(curr_grid_chunk[x]);
          }
        }
      }
    }
    for (let i = 0; i < render_list.length; ++i) {
      render_list[i].render(ctx, camera_pos);
      if (show_aabb) {
        render_list[i].render_aabb(ctx, camera_pos);
      }
    }
  }
};
SSCD.IllegalActionError = function(message) {
  this.name = "Illegal Action";
  this.message = message || "";
};
SSCD.IllegalActionError.prototype = Error.prototype;

// src/services/src/utils/extend.ts
SSCD.extend = function(base, child) {
  for (let prop in base) {
    if (child[prop])
      continue;
    child[prop] = base[prop];
  }
  child.__inits = child.__inits || [];
  if (base.__init__) {
    child.__inits.push(base.__init__);
  }
  child.init = function() {
    for (let i = 0; i < this.__inits.length; ++i) {
      this.__curr_init_func = this.__inits[i];
      this.__curr_init_func();
    }
    delete this.__curr_init_func;
  };
};
SSCD.NotImplementedError = function(message) {
  this.name = "NotImplementedError";
  this.message = message || "";
};
SSCD.NotImplementedError.prototype = Error.prototype;

// src/services/src/shapes/shape.ts
SSCD.Shape = function() {
};
SSCD.Shape.prototype = {
  __type: "shape",
  __collision_type: null,
  is_shape: true,
  __data: null,
  __next_id: 0,
  __collision_tags: [],
  __collision_tags_val: SSCD.World.prototype._ALL_TAGS_VAL,
  __init__: function() {
    this.__position = new SSCD.Vector(0, 0);
    this.__grid_chunks = [];
    this.__world = null;
    this.__grid_bounderies = null;
    this.__last_insert_aabb = null;
    this.__id = SSCD.Shape.prototype.__next_id++;
  },
  get_id: function() {
    return this.__id;
  },
  set_collision_tags: function(tags) {
    if (this.__world === null) {
      throw new SSCD.IllegalActionError("Can't set tags for a shape that is not inside a collision world!");
    }
    if (tags === null) {
      this.__collision_tags = [];
      this.__collision_tags_val = SSCD.World.prototype._ALL_TAGS_VAL;
    } else {
      this.__collision_tags_val = this.__world.__get_tags_value(tags);
      if (!(tags instanceof Array)) {
        tags = [tags];
      }
      this.__collision_tags = tags;
    }
    if (this.__update_tags_hook) {
      this.__update_tags_hook();
    }
    return this;
  },
  __update_tags_hook: null,
  get_collision_tags: function() {
    return this.__collision_tags;
  },
  collision_tags_match: function(tags) {
    if (isNaN(tags)) {
      if (this.__world === null) {
        throw new SSCD.IllegalActionError("If you provide tags as string(s) the shape must be inside a collision world to convert them!");
      }
      tags = this.__world.__get_tags_value(tags);
    }
    return (this.__collision_tags_val & tags) !== 0;
  },
  test_collide_with: function(obj) {
    return SSCD.CollisionManager.test_collision(this, obj);
  },
  repel: function(obj, force, iterations, factor_self, factor_other) {
    force = force || 1;
    iterations = iterations || 1;
    if (factor_self === void 0)
      factor_self = 0;
    if (factor_other === void 0)
      factor_other = 1;
    let push_vector_other, push_vector_self;
    let push_vector = this.get_repel_direction(obj).multiply_scalar_self(force);
    if (factor_other)
      push_vector_other = push_vector.multiply_scalar(factor_other);
    if (factor_self)
      push_vector_self = push_vector.multiply_scalar(factor_self * -1);
    let ret = SSCD.Vector.ZERO.clone();
    let collide = true;
    while (collide && iterations > 0) {
      iterations--;
      if (push_vector_other)
        obj.move(push_vector_other);
      if (push_vector_self)
        this.move(push_vector_self);
      ret.add_self(push_vector);
      collide = this.test_collide_with(obj);
    }
    return ret;
  },
  get_repel_direction: function(obj) {
    let center = this.get_abs_center();
    let other_center;
    if (obj instanceof SSCD.Vector) {
      other_center = obj;
    } else {
      other_center = obj.get_abs_center();
    }
    return other_center.sub(center).normalize_self();
  },
  __get_render_fill_color: function(opacity) {
    if (this.__override_fill_color) {
      return this.__override_fill_color;
    }
    return this.__collision_tags_to_color(this.__collision_tags_val, opacity);
  },
  __get_render_stroke_color: function(opacity) {
    if (this.__override_stroke_color) {
      return this.__override_stroke_color;
    }
    return this.__collision_tags_to_color(this.__collision_tags_val, opacity);
  },
  set_debug_render_colors: function(fill_color, stroke_color) {
    this.__override_fill_color = fill_color;
    this.__override_stroke_color = stroke_color;
  },
  __override_fill_color: null,
  __override_stroke_color: null,
  __collision_tags_to_color: function(tags, opacity) {
    let r = Math.round(Math.abs(Math.sin(tags)) * 255);
    let g = Math.round(Math.abs(Math.cos(tags)) * 255);
    let b = Math.round(r ^ g);
    return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
  },
  set_data: function(obj) {
    this.__data = obj;
    return this;
  },
  get_data: function() {
    return this.__data;
  },
  get_name: function() {
    return this.__type;
  },
  render_aabb: function(ctx, camera_pos) {
    let box = this.get_aabb();
    ctx.beginPath();
    ctx.rect(box.position.x - camera_pos.x, box.position.y - camera_pos.y, box.size.x, box.size.y);
    ctx.lineWidth = "1";
    ctx.strokeStyle = "rgba(50, 175, 45, 0.5)";
    ctx.stroke();
  },
  set_position: function(vector) {
    this.__position.x = vector.x;
    this.__position.y = vector.y;
    this.__update_position();
    return this;
  },
  get_position: function() {
    return this.__position.clone();
  },
  move: function(vector) {
    this.set_position(this.__position.add(vector));
    return this;
  },
  __update_position: function() {
    if (this.__update_position_hook) {
      this.__update_position_hook();
    }
    if (this.__aabb) {
      this.__update_aabb_pos();
    }
    this.__update_parent_world();
  },
  __update_aabb_pos: function() {
    this.__aabb.position = this.__position;
  },
  get_abs_center: function() {
    let aabb = this.get_aabb();
    return aabb.position.add(aabb.size.multiply_scalar(0.5));
  },
  reset_aabb: function() {
    this.__aabb = void 0;
  },
  __update_parent_world: function() {
    if (this.__world) {
      this.__world.__update_shape_grid(this);
    }
  },
  __update_position_hook: null,
  render: function() {
    throw new SSCD.NotImplementedError("");
  },
  build_aabb: function() {
    throw new SSCD.NotImplementedError("");
  },
  get_aabb: function() {
    this.__aabb = this.__aabb || this.build_aabb();
    return this.__aabb;
  }
};

// src/services/src/shapes/composite_shape.ts
SSCD.CompositeShape = function(position, objects) {
  this.init();
  this.__init_comp_shape(position, objects);
};
SSCD.CompositeShape.prototype = {
  __type: "composite-shape",
  __collision_type: "composite-shape",
  __init_comp_shape: function(position, objects) {
    this.__shapes = [];
    position = position || SSCD.Vector.ZERO;
    this.set_position(position);
    if (objects) {
      for (let i = 0; i < objects.length; ++i) {
        this.add(objects[i]);
      }
    }
  },
  render: function(ctx, camera_pos) {
    for (let i = 0; i < this.__shapes.length; ++i) {
      this.__shapes[i].shape.render(ctx, camera_pos);
    }
  },
  repel: function(obj, force, iterations, factor_self, factor_other) {
    let ret = SSCD.Vector.ZERO.clone();
    for (let i = 0; i < this.__shapes.length; ++i) {
      let shape = this.__shapes[i].shape;
      if (shape.test_collide_with(obj)) {
        ret.add_self(shape.repel(obj, force, iterations, 0, factor_other));
      }
    }
    if ((factor_self || 0) !== 0) {
      this.move(ret.multiply_scalar(factor_self * -1));
    }
    return ret;
  },
  set_debug_render_colors: function(fill_color, stroke_color) {
    this.__override_fill_color = fill_color;
    this.__override_stroke_color = stroke_color;
    for (let i = 0; i < this.__shapes.length; ++i) {
      this.__shapes[i].shape.set_debug_render_colors(fill_color, stroke_color);
    }
  },
  get_shapes: function() {
    if (this.__shapes_list_c) {
      return this.__shapes_list_c;
    }
    let ret = [];
    for (let i = 0; i < this.__shapes.length; ++i) {
      ret.push(this.__shapes[i].shape);
    }
    this.__shapes_list_c = ret;
    return ret;
  },
  build_aabb: function() {
    if (this.__shapes.length === 0) {
      this.__aabb_pos_offset_c = SSCD.Vector.ZERO;
      return new SSCD.AABB(SSCD.Vector.ZERO, SSCD.Vector.ZERO);
    }
    let ret = null;
    for (let i = 0; i < this.__shapes.length; ++i) {
      let curr_aabb = this.__shapes[i].shape.get_aabb();
      if (ret) {
        ret.expand(curr_aabb);
      } else {
        ret = curr_aabb;
      }
    }
    this.__aabb_pos_offset_c = ret.position.sub(this.__position);
    return ret;
  },
  __update_aabb_pos: function() {
    this.__aabb.position = this.__position.add(this.__aabb_pos_offset_c);
  },
  add: function(shape) {
    if (shape.__world) {
      throw new SSCD.IllegalActionError("Can't add shape with collision world to a composite shape!");
    }
    let offset = shape.__position;
    this.__shapes_list_c = void 0;
    this.__shapes.push({
      shape,
      offset: offset.clone()
    });
    shape.set_position(this.__position.add(offset));
    this.reset_aabb();
    this.__update_parent_world();
    shape.__collision_tags_val = this.__collision_tags_val;
    shape.__collision_tags = this.__collision_tags;
    shape.__override_fill_color = this.__override_fill_color;
    shape.__override_stroke_color = this.__override_stroke_color;
    return shape;
  },
  __update_tags_hook: function() {
    for (let i = 0; i < this.__shapes; ++i) {
      let shape = this.__shapes[i].shape;
      shape.__collision_tags_val = this.__collision_tags_val;
      shape.__collision_tags = this.__collision_tags;
    }
  },
  remove: function(shape) {
    this.__shapes_list_c = void 0;
    for (let i = 0; i < this.__shapes.length; ++i) {
      if (this.__shapes[i].shape === shape) {
        this.__shapes.splice(i, 1);
        this.__update_parent_world();
        return;
      }
    }
    throw new SSCD.IllegalActionError("Shape to remove is not in composite shape!");
  },
  __update_position_hook: function() {
    for (let i = 0; i < this.__shapes.length; ++i) {
      this.__shapes[i].shape.set_position(this.__position.add(this.__shapes[i].offset));
    }
  }
};
SSCD.extend(SSCD.Shape.prototype, SSCD.CompositeShape.prototype);

// src/services/src/shapes/capsule.ts
SSCD.Capsule = function(position, size, standing) {
  this.init();
  if (standing === void 0)
    standing = true;
  let objects = [];
  if (standing) {
    size = size.clone();
    size.y -= size.x;
    objects.push(new SSCD.Rectangle(new SSCD.Vector(-size.x * 0.5, -size.y * 0.5), size));
    objects.push(new SSCD.Circle(new SSCD.Vector(0, -size.y * 0.5), size.x * 0.5));
    objects.push(new SSCD.Circle(new SSCD.Vector(0, size.y * 0.5), size.x * 0.5));
  } else {
    size = size.clone();
    size.y -= size.x;
    objects.push(new SSCD.Rectangle(new SSCD.Vector(-size.y * 0.5, -size.x * 0.5), size.flip()));
    objects.push(new SSCD.Circle(new SSCD.Vector(-size.y * 0.5, 0), size.x * 0.5));
    objects.push(new SSCD.Circle(new SSCD.Vector(size.y * 0.5, 0), size.x * 0.5));
  }
  this.__init_comp_shape(position, objects);
};
SSCD.Capsule.prototype = {
  __type: "capsule"
};
SSCD.extend(SSCD.CompositeShape.prototype, SSCD.Capsule.prototype);

// src/services/src/shapes/circle.ts
SSCD.Circle = function(position, radius) {
  this.init();
  this.__radius = radius;
  this.__size = new SSCD.Vector(radius, radius).multiply_scalar_self(2);
  this.set_position(position);
};
SSCD.Circle.prototype = {
  __type: "circle",
  __collision_type: "circle",
  render: function(ctx, camera_pos) {
    let position = this.__position.sub(camera_pos);
    ctx.beginPath();
    ctx.arc(position.x, position.y, this.__radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = "7";
    ctx.strokeStyle = this.__get_render_stroke_color(0.75);
    ctx.stroke();
    ctx.fillStyle = this.__get_render_fill_color(0.35);
    ctx.fill();
  },
  get_radius: function() {
    return this.__radius;
  },
  __update_aabb_pos: function() {
    this.__aabb.position = this.__position.sub_scalar(this.__radius);
  },
  build_aabb: function() {
    return new SSCD.AABB(this.__position.sub_scalar(this.__radius), this.__size);
  },
  get_abs_center: function() {
    return this.__position.clone();
  }
};
SSCD.extend(SSCD.Shape.prototype, SSCD.Circle.prototype);

// src/services/src/shapes/line.ts
SSCD.Line = function(source, dest) {
  this.init();
  this.__dest = dest;
  this.set_position(source);
};
SSCD.Line.prototype = {
  __type: "line",
  __collision_type: "line",
  render: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.__position.x, this.__position.y);
    let dest = this.__position.add(this.__dest);
    ctx.lineTo(dest.x, dest.y);
    ctx.lineWidth = "7";
    ctx.strokeStyle = this.__get_render_stroke_color(0.75);
    ctx.stroke();
  },
  build_aabb: function() {
    let pos = new SSCD.Vector(0, 0);
    pos.x = this.__dest.x > 0 ? this.__position.x : this.__position.x + this.__dest.x;
    pos.y = this.__dest.y > 0 ? this.__position.y : this.__position.y + this.__dest.y;
    let size = this.__dest.apply(Math.abs);
    return new SSCD.AABB(pos, size);
  },
  get_p1: function() {
    this.__p1_c = this.__p1_c || this.__position.clone();
    return this.__p1_c;
  },
  get_p2: function() {
    this.__p2_c = this.__p2_c || this.__position.add(this.__dest);
    return this.__p2_c;
  },
  __update_position_hook: function() {
    this.__p1_c = void 0;
    this.__p2_c = void 0;
  }
};
SSCD.extend(SSCD.Shape.prototype, SSCD.Line.prototype);

// src/services/src/shapes/lines_strip.ts
SSCD.LineStrip = function(position, points, closed) {
  this.init();
  this.__points = points;
  if (points.length <= 1) {
    throw new SSCD.IllegalActionError("Not enough vectors for LineStrip (got to have at least two vectors)");
  }
  if (closed) {
    this.__points.push(this.__points[0]);
  }
  this.set_position(position);
};
SSCD.LineStrip.prototype = {
  __type: "line-strip",
  __collision_type: "line-strip",
  render: function(ctx) {
    let to = void 0;
    ctx.beginPath();
    for (let i = 0; i < this.__points.length - 1; ++i) {
      let from = this.__position.add(this.__points[i]);
      to = this.__position.add(this.__points[i + 1]);
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
    }
    ctx.moveTo(to.x, to.y);
    to = this.__position.add(this.__points[this.__points.length - 1]);
    ctx.lineTo(to.x, to.y);
    ctx.lineWidth = "7";
    ctx.strokeStyle = this.__get_render_stroke_color(0.75);
    ctx.stroke();
  },
  get_abs_lines: function() {
    if (this.__abs_lines_c) {
      return this.__abs_lines_c;
    }
    let points = this.get_abs_points();
    let ret = [];
    for (let i = 0; i < points.length - 1; i++) {
      ret.push([points[i], points[i + 1]]);
    }
    this.__abs_lines_c = ret;
    return ret;
  },
  get_abs_points: function() {
    if (this.__abs_points_c) {
      return this.__abs_points_c;
    }
    let ret = [];
    for (let i = 0; i < this.__points.length; i++) {
      ret.push(this.__points[i].add(this.__position));
    }
    this.__abs_points_c = ret;
    return ret;
  },
  __update_position_hook: function() {
    this.__abs_points_c = void 0;
    this.__abs_lines_c = void 0;
  },
  __update_aabb_pos: function() {
    this.__aabb.position.set(this.__aabb_offset_c.add(this.__position));
  },
  build_aabb: function() {
    let ret = new SSCD.AABB(SSCD.Vector.ZERO, SSCD.Vector.ZERO);
    for (let i = 0; i < this.__points.length; ++i) {
      ret.add_vector(this.__points[i]);
    }
    this.__aabb_offset_c = ret.position.clone();
    ret.position.add_self(this.__position);
    return ret;
  }
};
SSCD.extend(SSCD.Shape.prototype, SSCD.LineStrip.prototype);

// src/services/src/shapes/rectangle.ts
SSCD.Rectangle = function(position, size) {
  this.init();
  this.__size = size;
  this.set_position(position);
};
SSCD.Rectangle.prototype = {
  __type: "rectangle",
  __collision_type: "rectangle",
  render: function(ctx, camera_pos) {
    let position = this.__position.sub(camera_pos);
    ctx.beginPath();
    ctx.rect(position.x, position.y, this.__size.x, this.__size.y);
    ctx.lineWidth = "7";
    ctx.strokeStyle = this.__get_render_stroke_color(0.75);
    ctx.stroke();
    ctx.fillStyle = this.__get_render_fill_color(0.35);
    ctx.fill();
  },
  get_size: function() {
    return this.__size.clone();
  },
  build_aabb: function() {
    return new SSCD.AABB(this.__position, this.__size);
  },
  get_top_left: function() {
    this.__top_left_c = this.__top_left_c || this.__position.clone();
    return this.__top_left_c;
  },
  get_bottom_left: function() {
    this.__bottom_left_c = this.__bottom_left_c || this.__position.add(new SSCD.Vector(0, this.__size.y));
    return this.__bottom_left_c;
  },
  get_top_right: function() {
    this.__top_right_c = this.__top_right_c || this.__position.add(new SSCD.Vector(this.__size.x, 0));
    return this.__top_right_c;
  },
  get_bottom_right: function() {
    this.__bottom_right_c = this.__bottom_right_c || this.__position.add(new SSCD.Vector(this.__size.x, this.__size.y));
    return this.__bottom_right_c;
  },
  get_abs_center: function() {
    this.__abs_center_c = this.__abs_center_c || this.__position.add(this.__size.divide_scalar(2));
    return this.__abs_center_c;
  },
  __update_position_hook: function() {
    this.__top_left_c = void 0;
    this.__top_right_c = void 0;
    this.__bottom_left_c = void 0;
    this.__bottom_right_c = void 0;
    this.__abs_center_c = void 0;
  }
};
SSCD.extend(SSCD.Shape.prototype, SSCD.Rectangle.prototype);

// src/services/src/shapes/shapes_collider.ts
SSCD.CollisionManager = {
  test_collision: function(a, b) {
    if (a instanceof SSCD.Vector && b instanceof SSCD.Vector) {
      return this._test_collision_vector_vector(a, b);
    }
    if (a.__collision_type == "composite-shape") {
      return this._test_collision_composite_shape(a, b);
    }
    if (b.__collision_type == "composite-shape") {
      return this._test_collision_composite_shape(b, a);
    }
    if (a instanceof SSCD.Vector && b.__collision_type == "circle") {
      return this._test_collision_circle_vector(b, a);
    }
    if (a.__collision_type == "circle" && b instanceof SSCD.Vector) {
      return this._test_collision_circle_vector(a, b);
    }
    if (a.__collision_type == "circle" && b.__collision_type == "circle") {
      return this._test_collision_circle_circle(b, a);
    }
    if (a.__collision_type == "circle" && b.__collision_type == "rectangle") {
      return this._test_collision_circle_rect(a, b);
    }
    if (a.__collision_type == "rectangle" && b.__collision_type == "circle") {
      return this._test_collision_circle_rect(b, a);
    }
    if (a.__collision_type == "circle" && b.__collision_type == "line") {
      return this._test_collision_circle_line(a, b);
    }
    if (a.__collision_type == "line" && b.__collision_type == "circle") {
      return this._test_collision_circle_line(b, a);
    }
    if (a.__collision_type == "line-strip" && b.__collision_type == "line") {
      return this._test_collision_linestrip_line(a, b);
    }
    if (a.__collision_type == "line" && b.__collision_type == "line-strip") {
      return this._test_collision_linestrip_line(b, a);
    }
    if (a.__collision_type == "circle" && b.__collision_type == "line-strip") {
      return this._test_collision_circle_linestrip(a, b);
    }
    if (a.__collision_type == "line-strip" && b.__collision_type == "circle") {
      return this._test_collision_circle_linestrip(b, a);
    }
    if (a instanceof SSCD.Vector && b.__collision_type == "rectangle") {
      return this._test_collision_rect_vector(b, a);
    }
    if (a.__collision_type == "rectangle" && b instanceof SSCD.Vector) {
      return this._test_collision_rect_vector(a, b);
    }
    if (a.__collision_type == "rectangle" && b.__collision_type == "rectangle") {
      return this._test_collision_rect_rect(b, a);
    }
    if (a.__collision_type == "line-strip" && b.__collision_type == "line-strip") {
      return this._test_collision_linestrip_linestrip(a, b);
    }
    if (a.__collision_type == "line" && b.__collision_type == "rectangle") {
      return this._test_collision_rect_line(b, a);
    }
    if (a.__collision_type == "rectangle" && b.__collision_type == "line") {
      return this._test_collision_rect_line(a, b);
    }
    if (a.__collision_type == "line-strip" && b.__collision_type == "rectangle") {
      return this._test_collision_rect_linestrip(b, a);
    }
    if (a.__collision_type == "rectangle" && b.__collision_type == "line-strip") {
      return this._test_collision_rect_linestrip(a, b);
    }
    if (a.__collision_type == "line" && b.__collision_type == "line") {
      return this._test_collision_line_line(a, b);
    }
    if (a.__collision_type == "line" && b instanceof SSCD.Vector) {
      return this._test_collision_vector_line(b, a);
    }
    if (a instanceof SSCD.Vector && b.__collision_type == "line") {
      return this._test_collision_vector_line(a, b);
    }
    if (a.__collision_type == "line-strip" && b instanceof SSCD.Vector) {
      return this._test_collision_vector_linestrip(b, a);
    }
    if (a instanceof SSCD.Vector && b.__collision_type == "line-strip") {
      return this._test_collision_vector_linestrip(a, b);
    }
    throw new SSCD.UnsupportedShapes(a, b);
  },
  _test_collision_vector_vector: function(a, b) {
    return a.x === b.x && a.y === b.y;
  },
  _test_collision_circle_vector: function(circle, vector) {
    return SSCD.Math.distance(circle.__position, vector) <= circle.__radius;
  },
  _test_collision_circle_circle: function(a, b) {
    return SSCD.Math.distance(a.__position, b.__position) <= a.__radius + b.__radius;
  },
  _test_collision_rect_vector: function(rect, vector) {
    return vector.x >= rect.__position.x && vector.y >= rect.__position.y && vector.x <= rect.__position.x + rect.__size.x && vector.y <= rect.__position.y + rect.__size.y;
  },
  _test_collision_vector_line: function(v, line) {
    return SSCD.Math.is_on_line(v, line.get_p1(), line.get_p2());
  },
  _test_collision_vector_linestrip: function(v, linestrip) {
    let lines = linestrip.get_abs_lines();
    for (let i = 0; i < lines.length; ++i) {
      if (SSCD.Math.is_on_line(v, lines[i][0], lines[i][1])) {
        return true;
      }
    }
    return false;
  },
  _test_collision_circle_line: function(circle, line) {
    return SSCD.Math.distance_to_line(circle.__position, line.get_p1(), line.get_p2()) <= circle.__radius;
  },
  _test_collision_circle_linestrip: function(circle, linestrip) {
    let lines = linestrip.get_abs_lines();
    for (let i = 0; i < lines.length; ++i) {
      if (SSCD.Math.distance_to_line(circle.__position, lines[i][0], lines[i][1]) <= circle.__radius) {
        return true;
      }
    }
    return false;
  },
  _test_collision_linestrip_line: function(linestrip, line) {
    let lines = linestrip.get_abs_lines();
    let p1 = line.get_p1(), p2 = line.get_p2();
    for (let i = 0; i < lines.length; ++i) {
      if (SSCD.Math.line_intersects(p1, p2, lines[i][0], lines[i][1])) {
        return true;
      }
    }
    return false;
  },
  _test_collision_line_line: function(a, b) {
    return SSCD.Math.line_intersects(
      a.get_p1(),
      a.get_p2(),
      b.get_p1(),
      b.get_p2()
    );
  },
  _test_collision_rect_line: function(rect, line) {
    let p1 = line.get_p1();
    let p2 = line.get_p2();
    if (SSCD.CollisionManager._test_collision_rect_vector(rect, p1) || SSCD.CollisionManager._test_collision_rect_vector(rect, p2)) {
      return true;
    }
    let r1 = rect.get_top_left();
    let r2 = rect.get_bottom_left();
    if (SSCD.Math.line_intersects(p1, p2, r1, r2)) {
      return true;
    }
    let r3 = rect.get_top_right();
    let r4 = rect.get_bottom_right();
    if (SSCD.Math.line_intersects(p1, p2, r3, r4)) {
      return true;
    }
    if (SSCD.Math.line_intersects(p1, p2, r1, r3)) {
      return true;
    }
    if (SSCD.Math.line_intersects(p1, p2, r2, r4)) {
      return true;
    }
    return false;
  },
  _test_collision_rect_linestrip: function(rect, linesstrip) {
    let points = linesstrip.get_abs_points();
    for (let i = 0; i < points.length; ++i) {
      if (this._test_collision_rect_vector(rect, points[i])) {
        return true;
      }
    }
    let r1 = rect.get_top_left();
    let r2 = rect.get_bottom_left();
    let r3 = rect.get_top_right();
    let r4 = rect.get_bottom_right();
    let lines = linesstrip.get_abs_lines();
    for (let i = 0; i < lines.length; ++i) {
      let p1 = lines[i][0];
      let p2 = lines[i][1];
      if (SSCD.Math.line_intersects(p1, p2, r1, r2)) {
        return true;
      }
      if (SSCD.Math.line_intersects(p1, p2, r3, r4)) {
        return true;
      }
      if (SSCD.Math.line_intersects(p1, p2, r1, r3)) {
        return true;
      }
      if (SSCD.Math.line_intersects(p1, p2, r2, r4)) {
        return true;
      }
    }
    return false;
  },
  _test_collision_linestrip_linestrip: function(strip1, strip2) {
    let lines1 = strip1.get_abs_lines();
    let lines2 = strip2.get_abs_lines();
    for (let i = 0; i < lines1.length; ++i) {
      for (let j = 0; j < lines2.length; ++j) {
        if (SSCD.Math.line_intersects(
          lines1[i][0],
          lines1[i][1],
          lines2[j][0],
          lines2[j][1]
        )) {
          return true;
        }
      }
    }
    return false;
  },
  _test_collision_composite_shape: function(composite, other) {
    let comp_shapes = composite.get_shapes();
    if (other.__collision_type == "composite-shape") {
      let other_shapes = other.get_shapes();
      for (let i = 0; i < comp_shapes.length; ++i) {
        for (let j = 0; j < other_shapes.length; ++j) {
          if (SSCD.CollisionManager.test_collision(comp_shapes[i], other_shapes[j])) {
            return true;
          }
        }
      }
    } else {
      for (let i = 0; i < comp_shapes.length; ++i) {
        if (SSCD.CollisionManager.test_collision(comp_shapes[i], other)) {
          return true;
        }
      }
    }
    return false;
  },
  _test_collision_circle_rect: function(circle, rect) {
    let circle_pos = circle.__position;
    let collide = SSCD.CollisionManager._test_collision_rect_vector(rect, circle_pos);
    if (collide) {
      return true;
    }
    let rect_center = rect.get_abs_center();
    collide = SSCD.CollisionManager._test_collision_circle_vector(circle, rect_center);
    if (collide) {
      return true;
    }
    let lines = [];
    if (rect_center.x > circle_pos.x) {
      lines.push([rect.get_top_left(), rect.get_bottom_left()]);
    } else {
      lines.push([rect.get_top_right(), rect.get_bottom_right()]);
    }
    if (rect_center.y > circle_pos.y) {
      lines.push([rect.get_top_left(), rect.get_top_right()]);
    } else {
      lines.push([rect.get_bottom_left(), rect.get_bottom_right()]);
    }
    for (let i = 0; i < lines.length; ++i) {
      let dist_to_line = SSCD.Math.distance_to_line(circle_pos, lines[i][0], lines[i][1]);
      if (dist_to_line <= circle.__radius) {
        return true;
      }
    }
    return false;
  },
  _test_collision_rect_rect: function(a, b) {
    let r1 = {
      left: a.__position.x,
      right: a.__position.x + a.__size.x,
      top: a.__position.y,
      bottom: a.__position.y + a.__size.y
    };
    let r2 = {
      left: b.__position.x,
      right: b.__position.x + b.__size.x,
      top: b.__position.y,
      bottom: b.__position.y + b.__size.y
    };
    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
  }
};
SSCD.UnsupportedShapes = function(a, b) {
  this.name = "Unsupported Shapes";
  this.message = "Unsupported shapes collision test! '" + a.get_name() + "' <-> '" + b.get_name() + "'.";
};
SSCD.UnsupportedShapes.prototype = Error.prototype;

// src/services/src/utils/aabb.ts
SSCD.AABB = function(position, size) {
  this.position = position.clone();
  this.size = size.clone();
};
SSCD.AABB.prototype = {
  expand: function(other) {
    let min_x = Math.min(this.position.x, other.position.x);
    let min_y = Math.min(this.position.y, other.position.y);
    let max_x = Math.max(this.position.x + this.size.x, other.position.x + other.size.x);
    let max_y = Math.max(this.position.y + this.size.y, other.position.y + other.size.y);
    this.position.x = min_x;
    this.position.y = min_y;
    this.size.x = max_x - min_x;
    this.size.y = max_y - min_y;
  },
  add_vector: function(vector) {
    let push_pos_x = this.position.x - vector.x;
    if (push_pos_x > 0) {
      this.position.x -= push_pos_x;
      this.size.x += push_pos_x;
    }
    let push_pos_y = this.position.y - vector.y;
    if (push_pos_y > 0) {
      this.position.y -= push_pos_y;
      this.size.y += push_pos_y;
    }
    let push_size_x = vector.x - (this.position.x + this.size.x);
    if (push_size_x > 0) {
      this.size.x += push_size_x;
    }
    let push_size_y = vector.y - (this.position.y + this.size.y);
    if (push_size_y > 0) {
      this.size.y += push_size_y;
    }
  },
  clone: function() {
    return new SSCD.AABB(this.position, this.size);
  }
};

// src/services/src/utils/math.ts
SSCD.Math = {};
SSCD.Math.to_radians = function(degrees) {
  return degrees * Math.PI / 180;
};
SSCD.Math.to_degrees = function(radians) {
  return radians * 180 / Math.PI;
};
SSCD.Math.distance = function(p1, p2) {
  let dx = p2.x - p1.x, dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
};
SSCD.Math.dist2 = function(p1, p2) {
  let dx = p2.x - p1.x, dy = p2.y - p1.y;
  return dx * dx + dy * dy;
};
SSCD.Math.angle = function(P1, P2) {
  let deltaY = P2.y - P1.y, deltaX = P2.x - P1.x;
  return Math.atan2(deltaY, deltaX) * 180 / Math.PI;
};
SSCD.Math.distance_to_line = function(p, v, w) {
  let l2 = SSCD.Math.dist2(v, w);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  if (t < 0) {
    return SSCD.Math.distance(p, v);
  }
  if (t > 1) {
    return SSCD.Math.distance(p, w);
  }
  return SSCD.Math.distance(p, {
    x: v.x + t * (w.x - v.x),
    y: v.y + t * (w.y - v.y)
  });
};
SSCD.Math.line_intersects = function(p0, p1, p2, p3) {
  let s1_x, s1_y, s2_x, s2_y;
  s1_x = p1.x - p0.x;
  s1_y = p1.y - p0.y;
  s2_x = p3.x - p2.x;
  s2_y = p3.y - p2.y;
  let s, t;
  s = (-s1_y * (p0.x - p2.x) + s1_x * (p0.y - p2.y)) / (-s2_x * s1_y + s1_x * s2_y);
  t = (s2_x * (p0.y - p2.y) - s2_y * (p0.x - p2.x)) / (-s2_x * s1_y + s1_x * s2_y);
  if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
    return 1;
  }
  return 0;
};
SSCD.Math.is_on_line = function(v, l1, l2) {
  return SSCD.Math.distance_to_line(v, l1, l2) <= 5;
};
SSCD.Math.angles_dis = function(a0, a1) {
  a0 = SSCD.Math.to_radians(a0);
  a1 = SSCD.Math.to_radians(a1);
  let max = Math.PI * 2;
  let da = (a1 - a0) % max;
  let distance = 2 * da % max - da;
  distance = SSCD.Math.to_degrees(distance);
  return Math.abs(distance);
};

// src/services/src/utils/vector.ts
SSCD.Vector = function(x, y) {
  this.x = x;
  this.y = y;
};
SSCD.Vector.prototype = {
  get_name: function() {
    return "vector";
  },
  clone: function() {
    return new SSCD.Vector(this.x, this.y);
  },
  set: function(vector) {
    this.x = vector.x;
    this.y = vector.y;
  },
  flip: function() {
    return new SSCD.Vector(this.y, this.x);
  },
  flip_self: function() {
    this.y = [this.x, this.x = this.y][0];
    return this;
  },
  negative: function() {
    return this.multiply_scalar(-1);
  },
  negative_self: function() {
    this.multiply_scalar_self(-1);
    return this;
  },
  distance_from: function(other) {
    return SSCD.Math.distance(this, other);
  },
  angle_from: function(other) {
    return SSCD.Math.angle(this, other);
  },
  move: function(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  },
  normalize_self: function() {
    let by = Math.sqrt(this.x * this.x + this.y * this.y);
    if (by === 0)
      return this;
    this.x /= by;
    this.y /= by;
    return this;
  },
  normalize: function() {
    return this.clone().normalize_self();
  },
  add_self: function(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  },
  sub_self: function(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  },
  divide_self: function(other) {
    this.x /= other.x;
    this.y /= other.y;
    return this;
  },
  multiply_self: function(other) {
    this.x *= other.x;
    this.y *= other.y;
    return this;
  },
  add_scalar_self: function(val) {
    this.x += val;
    this.y += val;
    return this;
  },
  sub_scalar_self: function(val) {
    this.x -= val;
    this.y -= val;
    return this;
  },
  divide_scalar_self: function(val) {
    this.x /= val;
    this.y /= val;
    return this;
  },
  multiply_scalar_self: function(val) {
    this.x *= val;
    this.y *= val;
    return this;
  },
  add: function(other) {
    return this.clone().add_self(other);
  },
  sub: function(other) {
    return this.clone().sub_self(other);
  },
  multiply: function(other) {
    return this.clone().multiply_self(other);
  },
  divide: function(other) {
    return this.clone().divide_self(other);
  },
  add_scalar: function(val) {
    return this.clone().add_scalar_self(val);
  },
  sub_scalar: function(val) {
    return this.clone().sub_scalar_self(val);
  },
  multiply_scalar: function(val) {
    return this.clone().multiply_scalar_self(val);
  },
  divide_scalar: function(val) {
    return this.clone().divide_scalar_self(val);
  },
  clamp: function(min, max) {
    if (this.x < min)
      this.x = min;
    if (this.y < min)
      this.y = min;
    if (this.x > max)
      this.x = max;
    if (this.y > max)
      this.y = max;
    return this;
  },
  from_radian: function(rad) {
    this.x = Math.cos(rad);
    this.y = Math.sin(rad);
    return this;
  },
  from_angle: function(angle) {
    return this.from_radian(SSCD.Math.to_radians(angle));
  },
  apply_self: function(func) {
    this.x = func(this.x);
    this.y = func(this.y);
    return this;
  },
  apply: function(func) {
    return this.clone().apply_self(func);
  },
  debug: function() {
    console.debug(this.x + ", " + this.y);
  }
};
SSCD.Vector.ZERO = new SSCD.Vector(0, 0);
SSCD.Vector.ONE = new SSCD.Vector(1, 1);
SSCD.Vector.UP = new SSCD.Vector(0, -1);
SSCD.Vector.DOWN = new SSCD.Vector(0, 1);
SSCD.Vector.LEFT = new SSCD.Vector(-1, 0);
SSCD.Vector.RIGHT = new SSCD.Vector(1, 0);
SSCD.Vector.UP_LEFT = new SSCD.Vector(-1, -1);
SSCD.Vector.DOWN_LEFT = new SSCD.Vector(-1, 1);
SSCD.Vector.UP_RIGHT = new SSCD.Vector(1, -1);
SSCD.Vector.DOWN_RIGHT = new SSCD.Vector(1, 1);

// src/services/src/tilemap.ts
SSCD.TilemapWorld = function(tile_size, additional_params) {
  let params = additional_params;
  params = params || {};
  params.grid_size = tile_size;
  this.__tiles = {};
  this.__init_world(params);
};
SSCD.TilemapWorld.prototype = {
  set_tile: function(index, collision, tags) {
    let shape = this.get_tile(index);
    if (!collision) {
      if (shape) {
        this.__set_tile_shape(index, null);
        this.remove(shape);
      }
      return;
    }
    if (shape === void 0) {
      let tilesize = this.__params.grid_size;
      let position = index.multiply_scalar(tilesize);
      let size = new SSCD.Vector(tilesize, tilesize);
      shape = this.__add_tile_shape(new SSCD.Rectangle(position, size), index);
      this.__set_tile_shape(index, shape);
    }
    if (tags !== void 0) {
      shape.set_collision_tags(tags);
    }
  },
  __add_tile_shape: function(obj, index) {
    this.__grid[index.x] = this.__grid[index.x] || {};
    this.__grid[index.x][index.y] = this.__grid[index.x][index.y] || [];
    let curr_grid_chunk = this.__grid[index.x][index.y];
    curr_grid_chunk.push(obj);
    obj.__grid_chunks = [curr_grid_chunk];
    obj.__world = this;
    obj.__grid_bounderies = {
      min_x: index.x,
      min_y: index.y,
      max_x: index.x,
      max_y: index.y
    };
    this.__all_shapes[obj.get_id()] = obj;
    return obj;
  },
  set_from_matrix: function(matrix) {
    let index = new SSCD.Vector(0, 0);
    for (let i = 0; i < matrix.length; ++i) {
      index.x = 0;
      for (let j = 0; j < matrix[i].length; ++j) {
        this.set_tile(index, matrix[i][j], null);
        index.x++;
      }
      index.y++;
    }
  },
  get_tile: function(index) {
    return this.__tiles[index.x + "_" + index.y];
  },
  __set_tile_shape: function(index, shape) {
    if (shape === null) {
      delete this.__tiles[index.x + "_" + index.y];
    } else {
      this.__tiles[index.x + "_" + index.y] = shape;
    }
  }
};
SSCD.extend(SSCD.World.prototype, SSCD.TilemapWorld.prototype);

// src/services/simple-collision/SimpleCollisionDetection.ts
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);
var ADD = "ADD";
var REMOVE = "REMOVE";
var SimpleCollisionDetection = class {
  world;
  emitter = new import_eventemitter3.EventEmitter();
  getType() {
    return SimpleCollisionDetection.name;
  }
  constructor() {
    this.world = new SSCD.World();
  }
  onAdd(callback) {
    this.emitter.on(ADD, callback);
    return () => {
      this.emitter.off(ADD, callback);
    };
  }
  onRemove(callback) {
    this.emitter.on(REMOVE, callback);
    return () => {
      this.emitter.off(REMOVE, callback);
    };
  }
  register(param) {
    this.world.add(param);
    this.emitter.emit(ADD, param);
  }
  unregister(param) {
    this.world.remove(param);
    this.emitter.emit(REMOVE, param);
  }
  getObjectAt({ x, y }) {
    let obj = this.world.pick_object(new SSCD.Vector(x, y));
    return obj ? obj.get_data() : null;
  }
  getObjectIn({ x, y }, radius) {
    let collision_list = [];
    let shape = new SSCD.Circle(new SSCD.Vector(x, y), radius);
    this.world.test_collision(shape, void 0, collision_list);
    return collision_list.map((obj) => {
      return obj ? obj.get_data() : null;
    });
  }
  getWorld() {
    return this.world;
  }
};

// src/Identifier.ts
var SimpleCollisionDetectionName = Symbol.for("SimpleCollisionDetectionName");

// src/index.ts
var AxSSCDModule = class {
  getModule() {
    return new import_inversify.ContainerModule((bind) => {
      bind(SimpleCollisionDetectionName).toDynamicValue(() => {
        return new SimpleCollisionDetection();
      }).inSingletonScope();
    });
  }
};
export {
  AxSSCDModule,
  SimpleCollisionDetection,
  SimpleCollisionDetectionName
};
//# sourceMappingURL=index.mjs.map
