# Info Casa Challenge

## Getting Started

Please remember to setup your .env file and then follow this instructions.

### Install dependencies

  ```
  $ composer install                 // This would install all the dependencies from composer.json
  $ npm install                      // This would install all the dependencies from package.json
  ```

### Run migrations + Seeders

  ```
  $ php artisan migrate:refresh --seed
  ```

### Running localhost

  ```
  $ php artisan serve                // Run laravel server
  $ npm run dev                      // Run all Mix tasks
  $ npm run watch (optional)         // Watch will continue running in your terminal and watch all relevant files for changes
  ```

### Packages used

* [Laravel](https://laravel.com) - `v8.x`
  * [MetAPI](https://github.com/acidjazz/metapi) - API helpers and utilities
  * [debugbar](https://github.com/barryvdh/laravel-debugbar) - awesome debugbar for API

#### Comments

Con el backend de laravel no tuve problemas y con React.js todo me fue bastante bien hasta que me encontre con un problema. ¿Como comunicarme entre varios components y manipular el state de un array (en este caso los tasks)? Realmente pense que seria algo facil usando props y funciones pero se vuelve muy engorroso el codigo y problemas de performance. Tamoco no veo que exista un emit en React.js comparado con Angular y Vue.js.

Lei todos los reacts hooks pero tampoco no encontre alguno que pueda servir, quizas context pero por lo que vi no se usa para manejar data. Realmente espero un poco de feedback pero en tan poco tiempo aprendi bastante y voy a seguir desarrollando mas react.js por curiosidad. Disculpen por no llegar a tiempo.
