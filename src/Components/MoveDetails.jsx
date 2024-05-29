import React from 'react';

function MoveDetails({ move }) {
  return (
    <div className='movedetails'>
      {/* Additional Information */}
      <div className='first_movedetails_box'>
        <div>
          <h4>Additional Information</h4>
        </div>
        <div>
          <button>Edit Additional Info</button>
        </div>
      </div>

      {/* House Details */}
      <div className='first_movedetails_box'>
        <div>
          <h4>House Details</h4>
        </div>
        <div>
          <button>Edit House Details</button>
        </div>
      </div>

      {/* Existing House Details */}
      <h5 className='house_heading'>Existing House Details</h5>
      <div className='house_details_box'>
        <div>
          <h5>Floor No.</h5>
          <p>11</p>
        </div>
        <div>
          <h5>Elevator Available</h5>
          <p>Yes</p>
        </div>
        <div>
          <h5>Distance from Elevator / Staircase to truck</h5>
          <p>12</p>
        </div>
      </div>

      {/* New House Details */}
      <h5 className='house_heading'>New House Details</h5>
      <div className='house_details_box'>
        <div>
          <h5>Floor No.</h5>
          <p>11</p>
        </div>
        <div>
          <h5>Elevator Available</h5>
          <p>Yes</p>
        </div>
        <div>
          <h5>Distance from Elevator / Staircase to truck</h5>
          <p>11</p>
        </div>
      </div>

      {/* Inventory Details */}
      <div className='first_movedetails_box'>
        <div>
          <h4>Inventory Details</h4>
        </div>
        <div>
          <button>Edit Inventory</button>
        </div>
      </div>
    </div>
  );
}

export default MoveDetails;
