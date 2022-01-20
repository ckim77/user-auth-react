import React from 'react';


//this component can only be seen by people who are logged in (landing PAGE)
function Account() {
  return <div>
    <div id="sheet">
        <div id="header">
            <h1>Budget Sheet</h1>
            <h2>Payinguin</h2>
            <p class="row">
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
            </p>
        </div>

        <h2>Budget</h2>
        <div class="section">
            <p class="row">
                <span class="name">Food/Groceries</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Money I will spend on food.</span>
            
            <p class="row">
                <span class="name">Entertainment</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Movies/Dates/Activities.</span>
            
            <p class="row">
                <span class="name">Personal</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Personal items like clothing.</span>
            
            <p class="row total" tabindex="1" >
                <span class="name">Total</span>
                <span>100$</span>
                <span>100$</span>
                <span class="current">100$</span>
            </p>
        </div>
        
        <h2>Expenses</h2>
        <div class="section">
            <p class="row">
                <span class="name">Food/Groceries</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Notes</span>
            
            <p class="row">
                <span class="name">Entertainment</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Notes</span>
            
            <p class="row">
                <span class="name">Personal</span>
                <span>$</span>
                <span>$</span>
                <span class="current">$</span>
            </p>
            <span class="notes">Notes</span>
            
            <p class="row total" tabindex="1">
                <span class="name">Total</span>
                <span>-60$</span>
                <span>-30$</span>
                <span class="current">10$</span>
            </p>
        </div>

        <h2>Summary</h2>
        <div class="section">
            <p class="row total" tabindex="1">
                <span class="name">Total</span>
                <span>40$</span>
                <span>70$</span>
                <span class="current">110$</span>
            </p>
        </div>
    </div>
    <footer>Last Updated: December 2021</footer>

  </div>;
}

export default Account;
