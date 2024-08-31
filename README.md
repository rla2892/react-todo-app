# React To-Do List App

## Table of Contents
- [Project Structure](#project-structure)
- [UI Layout](#ui-layout)
- [Features](#features)
- [Styling](#styling)

## Project Structure

The project is divided into the following components:

- **App**: The root component that wraps the entire application.
  - **Header**: Displays the app title and simple navigation.
  - **TodoInput**: A component for adding new to-do items.
  - **TodoList**: Displays the list of to-do items.
    - **TodoItem**: Represents an individual to-do item.
  - **Footer**: Displays filters (All, Completed, Incomplete) and the count of remaining tasks.

## UI Layout

- **Header**
  - **Position**: At the top of the screen.
  - **Components**: App title (e.g., "My To-Do List"), a simple icon, or a theme switch button.

- **TodoInput**
  - **Position**: Directly below the Header.
  - **Components**: Input field (for entering a new to-do), Add button (to add a to-do).
  - **Functionality**: Adds a new item to the list when a to-do is added.

- **TodoList**
  - **Position**: Below the TodoInput.
  - **Components**: A list of `TodoItem` components.
  - **Functionality**: Check off tasks, delete tasks.
  - **UI**: A scrollable list displaying multiple to-dos.

- **TodoItem**
  - **Position**: Individual items within the `TodoList`.
  - **Components**: Checkbox (to mark as completed), to-do content, delete button.
  - **Functionality**: Mark tasks as completed with a checkbox, delete tasks with a delete button.

- **Footer**
  - **Position**: At the bottom of the screen.
  - **Components**: Displays the count of remaining tasks, filter buttons (All, Completed, Incomplete), an optional "Clear All" button.
  - **Functionality**: Filter the list based on the selected filter, clear all tasks (optional).

## Features

- **Add To-Do**: Users can enter a to-do item and add it to the `TodoList` by clicking the Add button.
- **Mark To-Do as Completed**: Users can mark a to-do item as completed by clicking the checkbox in `TodoItem`.
- **Delete To-Do**: Users can delete a to-do item by clicking the delete button in `TodoItem`.
- **Filter To-Dos**: Users can filter to-do items by All, Completed, or Incomplete tasks using the filter buttons in the `Footer`.
- **To-Do Count**: Displays the count of remaining incomplete tasks in the `Footer`.

## Styling

- **Modern and Simple Design**: Focus on a clean and intuitive UI with minimalistic elements.
- **Responsive Design**: Use CSS media queries to ensure the app is responsive across mobile, tablet, and desktop devices.
- **Dark Mode Support**: Provide an option for users to switch between light and dark themes.

---

This React To-Do List App is a project for practicing React fundamentals, including component structure, state management, and event handling.