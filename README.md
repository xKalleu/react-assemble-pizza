### `netlify dev`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

Netlify Functions was used to create the backend, the API routes were written with JS.
AWS Lambda was used to facilitate the creation of the application so that they respond quickly to new information.


See the section about (https://www.netlify.com/products/functions/) for more information.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Details project

The user should be able to add from [0-3] ingredients from that list without any additional cost for the pizza.
The user may add more ingredients, but each new addition after the third one costs $0.50.
The user can't repeat ingredients.
Maximum ingredients for each pizza is:
> 5 for small
> 7 for medium
> 9 for large.


To learn React, check out the [React documentation](https://reactjs.org/).
