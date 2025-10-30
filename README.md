# Project 5 - Brewery Data Dashboard

**Description:** A dynamic and responsive data dashboard built with React. This application fetches data from the public Open Brewery DB API, displays summary statistics, and allows users to search and filter the list of breweries in real-time.

**Built for:** Week 6, Project 5


### 🎥 Walkthrough GIF

**TODO:** Before you submit, record a GIF of your app working (showing the stats, the search, and the filter) and replace the empty `()` below with the link to your GIF. You can drag-and-drop a GIF into a GitHub issue, comment, or this README to get a URL.

![Brewery Dashboard Walkthrough]()

---

### 💻 Tech Stack

* **Framework:** React
* **Bundler:** Vite
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

#### Required Features
- [x] The site has a dashboard displaying a list of data fetched using an API call
- [x] The dashboard displays at least 10 unique items, one per row
- [x] The dashboard includes at least two features in each row
- [x] `useEffect` React hook and `async/await` are used
- [x] The app dashboard includes at least three summary statistics about the data
- [x] A search bar allows the user to search for an item in the fetched data
- [x] The search bar *correctly* filters items in the list, only displaying items matching the search query
- [x] The list of results dynamically updates as the user types into the search bar
- [x*] An additional filter allows the user to restrict displayed items by specified categories
- [x] The filter restricts items in the list using a *different attribute* than the search bar
- [x] The filter *correctly* filters items in the list
- [x] The dashboard list dynamically updates as the user adjusts the filter

#### Stretch Features
- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types (e.g., text input and a dropdown)
- [ ] The user can enter specific bounds for filter values

---

### 📝 License

This project is licensed under the MIT License.