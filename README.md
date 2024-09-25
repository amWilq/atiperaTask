# Periodic Table Application

## Task Overview
This project is a solution to a recruitment task that involves building an Angular application that displays a table of chemical elements and allows basic data interaction. The task focuses on providing good practices in state management, simulating data fetching, implementing UI interactions, and ensuring the application offers a responsive user experience.

## Project Goals
1. **Display a Table of Elements**: The application showcases a table with columns: `Number`, `Name`, `Weight`, and `Symbol`. 
2. **Simulate Data Fetching**: Upon application start, data should be "fetched" with a simulated delay (mock data provided).
3. **Editable Rows**: Users can edit the values of a row in the table (via a popup input form). After the user submits the changes, the row should update without directly mutating the data source.
4. **Filtering**: Implement a filtering feature with a single input field that filters the table across all columns. The filtering should only take effect after 2 seconds of inactivity.
5. **State Management**: The mock data should be managed in the state of the application, ensuring that state handling is as clean and efficient as possible.
6. **Component Libraries**: The project uses Angular Material to build a responsive and visually appealing UI.

## Key Features
1. **Loader**: A loading spinner is shown during the 2-second data-fetch simulation period to enhance the user experience.
2. **Table with Edit Capability**: Users can interact with each row of the table and modify values through a dialog form.
3. **Efficient Filtering**: The filtering mechanism uses a debounce delay of 2 seconds to avoid triggering unnecessary updates while the user is typing.
4. **No Direct Data Mutation**: Edited data is updated in the state without directly mutating the original array.

## Technologies Used
- **Angular 18.2.2**: Framework for building the application's structure and components.
- **RxAngular State Management**: Used for managing and reacting to application state changes efficiently.
- **Angular Material**: Component library used for UI elements such as the table, form controls, and dialog modals.
- **Reactive Forms**: Employed to handle the filter input and edit form declaratively.

## How the Project Works
1. **Data Loading**: Upon initialization, the application simulates fetching data by delaying the table's appearance for 2 seconds while showing a loading spinner.
2. **Filtering**: A filter input is provided that lets users filter the table across all columns. The filtering is debounced, so results are only updated after 2 seconds of no typing activity.
3. **Editing**: When the user clicks "Edit" on a table row, a popup modal appears, allowing them to modify any of the values in that row. Upon saving, the table is updated accordingly.
4. **Non-Mutating Updates**: Edits do not mutate the original dataset; instead, the updated data is merged back into the state, preserving immutability.

## Instructions to Run the Project
1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Start the application with `ng serve`.
4. Navigate to `http://localhost:4200/` to see the application in action.

## Libraries Used
- [Angular](https://angular.io/): Version 18.2.2.
- [Angular Material](https://material.angular.io/): For UI components such as tables, inputs, and dialogs.
- [RxAngular State](https://rx-angular.io/state): For state management, minimizing manual subscription handling.



## Additional Links

- [Project UX/UI](#).
- [Angular Project](#).

