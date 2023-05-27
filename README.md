# Norme Interface Definition Library

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Overview

This library is a module-based interface standard for Dependency Injection systems. It exports two types, `ModuleGeneratorAsync` and `ModuleGenerator`, that define the function signatures for generating `ContainerModule` and `AsyncContainerModule` objects, respectively. This library leverages the type system of the Inversify Dependency Injection library.

## Installation

```bash
npm install --save norme-interface-definition-library
```

## Usage

To use this library, import the types from it in your code and define functions that conform to them.

Example usage:

```typescript
import type { ModuleGenerator, ModuleGeneratorAsync } from 'norme-interface-definition-library';
import { interfaces } from 'inversify';

const myModuleGenerator: ModuleGenerator = () => new interfaces.ContainerModule(bind => {
  // bindings...
});

const myModuleGeneratorAsync: ModuleGeneratorAsync = async () => new interfaces.AsyncContainerModule(async bind => {
  // async bindings...
});
```

## Contributing

Contributions are more than welcome!

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file.

---

