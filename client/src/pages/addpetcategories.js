import React from 'react'

function addpetcategories() {
  return (
    <div className='Addpetcategories'>
       <div className='row'>
        <div className='col-2'></div>
        <div className='col-5'>
            <h3 className='mb-5'> + Add New Pet Category</h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pet category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Add</button></div>
                    {/* <div className='col-3'></div> */}
                </div>
               
            </form>

        </div>
        <div className='col-5'></div>

       </div>
      
    </div>
  )
}

export default addpetcategories