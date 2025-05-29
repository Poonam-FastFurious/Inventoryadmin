import React from 'react'

function Addcategory() {
  return (
    <>
      <div className="page-wrapper">
				<div className="content">
					<div className="page-header">
						<div className="page-title">
							<h4>Product Add Category</h4>
							<h6>Create new product Category</h6>
						</div>
					</div>
				
					<div className="card">
						<div className="card-body">
							<div className="sm:grid sm:grid-cols-2 gap-x-6">
								<div>
									<div className="form-group">
										<label>Category Name</label>
										<input type="text"/>
									</div>
								</div>
								<div>
									<div className="form-group">
										<label>Category Code</label>
										<input type="text"/>
									</div>
								</div>
								
								<div className="sm:col-span-2">
									<div className="form-group">
										<label>Description</label>
										<textarea className="form-control"></textarea>
									</div>
								</div>
								
								<div className="sm:col-span-2">
									<div className="form-group">
										<label>	Product Image</label>
										<div className="image-upload">
											<input type="file"/>
											<div className="image-uploads">
												<img src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/upload.svg" alt="img"/>
												<h4>Drag and drop a file to upload</h4>
											</div>
										</div>
									</div>
								</div>
								<div>
									<a href="javascript:void(0);" className="btn btn-submit mr-2">Submit</a>
									<a href="categorylist.html" className="btn btn-cancel">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				
				</div>
			</div>
    </>
  )
}

export default Addcategory
