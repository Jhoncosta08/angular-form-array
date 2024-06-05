# Angular Form Array

## About the project
>A dynamic form that allows for the efficient and intuitive addition and removal of fields. Utilizing an array of forms, the application enables users to add new fields through a button, with each new field being instantly incorporated into the form structure. Additionally, when a field is deleted, the indices are automatically adjusted, ensuring that the values of the remaining fields are preserved and correctly organized. This functionality makes data management flexible and agile, ideal for applications that require variable and customized data entry.

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.2.3
>* This project has implemented [ng-bootstrap](https://ng-bootstrap.github.io/) version 14.0.1

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages, think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)
>* [ng-bootstrap components](https://ng-bootstrap.github.io/#/components)

## Modularization
>The whole project is modularized, each component has its own module, in the `app.module.ts`
> file only the main modules are imported. Shared modules are created in the `Shared`
> folder and only called when needed, this avoids extra initial loading and endless module imports in the main system file.

## File name pattern
| Name rule      | Name pattern                                                    |
|:---------------|:----------------------------------------------------------------|
| Simple name    | `name.ts` / `name.html` / `name.css`                            |
| Compound name  | `compound-name.ts` / `compound-name.html` / `compound-name.css` |
| Directive name | `name.directive.ts` / `compound-name.directive.ts`              |
| Service name   | `name.service.ts` / `compound-name.service.ts`                  | 
| Model name     | `name.model.ts` / `compound-name.model.ts`                      | 
| Guard name     | `name.guard.ts` / `compound-name.guard.ts`                      | 

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/Jhoncosta08/angular-form-array/blob/master/src/assets/preview-one.png)
![image](https://github.com/Jhoncosta08/angular-form-array/blob/master/src/assets/preview-two.png)
![image](https://github.com/Jhoncosta08/angular-form-array/blob/master/src/assets/preview-three.png)

