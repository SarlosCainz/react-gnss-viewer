import React from 'react';
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
    return (
        <>
            <Parent>
                <Child />
            </Parent>
        </>
    );
}

export default App;
