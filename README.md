# Getting Started

To setup the project after cloning from the git repository run

### To load the necessary packages used in the library, run:
`npm install`

### To explore a demo of the components that are in the project, run: 
`npm run storybook`

### To check how the components have been imported in the project, run: 
`npm run start`

NOTE: Do not run storybook and start at the same time. Doing so may cause an error in storybook. If you encounter this, just close the error and continue exploring storybook. 

### To run tests that have been created in the project, run: 
`npm run test`

### When importing components from this library in a separate application, these are the steps to follow: 
1. `npm run build` on the component library.
2. Since this project is not published on npm, you can install the package locally. In the package.json of where you want to import components, add the following to your dependencies:
"govconnex-component-library": "Your path to the library with reusable components..." 
3. Don't forget to run `npm install` in the project you would want to import the components
4. Import the component on the page:
```javascript
import { Button } from "govconnex-component-library";
import { InputField } from "govconnex-component-library";
```