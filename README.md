# Brewery Data Dashboard (Project 6)

**Description:** A dynamic and responsive data dashboard built with React. This application fetches data from the public Open Brewery DB API, displays summary statistics, and allows users to search and filter the list of breweries in real-time.

**Part 2** adds data visualizations using **Recharts** and dynamic routing with **React Router**, allowing users to click on any brewery to see a dedicated detail page.

**Built for:** Week 6 & 7

---

### 🎥 Walkthrough GIF

![ab8b0c](https://github.com/user-attachments/assets/78f5b248-a3a1-4633-b852-e9ee53b4466a)


---

### 💻 Tech Stack

* **Framework:** React
* **Bundler:** Vite
* **Routing:** React Router (`react-router-dom`)
* **Charts:** Recharts
* **Language:** JavaScript (ES6+)
* **Styling:** CSS3
* **API:** [Open Brewery DB API](https://www.openbrewerydb.org/)

---

### 🚀 How to Run

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd brewery-api
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:5173/](http://localhost:5173/) (or the port shown in your terminal) in your browser.

---

### ✅ Features Checklist

#### Part 1: Dashboard & Filtering (Project 5)
- [x] The site has a dashboard displaying a list of data fetched using an API call
- [x] The dashboard displays at least 10 unique items, one per row
- [x] The dashboard includes at least two features in each row
- [x] `useEffect` React hook and `async/await` are used
- [x] The app dashboard includes at least three summary statistics about the data
- [x] A search bar allows the user to search for an item in the fetched data
- [x] The search bar *correctly* filters items in the list, only displaying items matching the search query
- [x] The list of results dynamically updates as the user types into the search bar
- [x] An additional filter allows the user to restrict displayed items by specified categories
- [x] The filter restricts items in the list using a *different attribute* than the search bar
- [x] The filter *correctly* filters items in the list
- [x] The dashboard list dynamically updates as the user adjusts the filter

#### Part 2: Routing & Visualization (Project 6)
- [x] Clicking on an item in the list view displays more details about it
- [x] Clicking on an item in the dashboard list navigates to a detail view for that item
- [x] Detail view includes extra information about the item not included in the dashboard view
- [x] The same header/layout is displayed in detail view as in dashboard view
- [x] Each detail view of an item has a direct, unique URL link to that item’s detail view page
- [x] The app includes at least two unique charts developed using the fetched data
- [x] At least two charts are incorporated into the dashboard view of the site
- [x] Each chart describes a different aspect of the dataset

#### Stretch Features
- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types (e.g., text input and a dropdown)
- [ ] The user can enter specific bounds for filter values
- [ ] The site allows users to toggle between different data visualizations

---

### 📝 License

This project is licensed under the MIT License.
