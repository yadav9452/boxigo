<h1>Boxigo</h1>

<p>This project is a React application that fetches and displays moving details from an API. The application dynamically renders move details and allows users to expand or collapse detailed views of each move.</p>

<h2>Features</h2>
<ul>
    <li>Fetches move data from an API</li>
    <li>Displays a list of moves with key details</li>
    <li>Expandable sections to view more details about each move</li>
    
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/your-username/mymoves-project.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd mymoves-project</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Start the development server:</li>
    <pre><code>npm start</code></pre>
</ol>

<h2>Usage</h2>
<ol>
    <li>After starting the development server, open your browser and navigate to <code>http://localhost:3000</code>.</li>
    <li>The application will fetch move data from the API and display it on the main page.</li>
    <li>Click on "View move details" to expand the section and see more details about the move. Click again to collapse the section.</li>
</ol>

<h2>Components</h2>
<h3>MyMoves</h3>
<p>This is the main component that fetches move data from the API and displays a list of moves. It also handles the logic for expanding and collapsing move details.</p>

<h3>MoveDetails</h3>
<p>This component displays detailed information about a specific move. It is conditionally rendered based on whether the move's details are expanded or not.</p>


<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
