import React from 'react'

const UserRegister = () => {
    return (
       
        <div>
            <div class="container-fluid bg-light py-3">
    <div class="row">
        <div class="col-md-6 mx-auto">
                <div class="card card-body">
                    <h3 class="text-center mb-4">Sign-up</h3>
                    <div class="alert alert-danger">
                        Please enter all fields to register.
                    </div>
                    <fieldset>
                        <div class="form-group has-error">
                            <input class="form-control input-lg" placeholder="Username" name="username" type="text"/>
                        </div>
                        <div class="form-group has-success">
                            <input class="form-control input-lg" placeholder="Password" name="password" value="" type="password"/>
                        </div>
                        <div class="form-group has-success">
                            <input class="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password"/>
                        </div>
                        <div class="form-group">
                        </div>
                        <div class="checkbox">
                            <label class="small">
                                <input name="terms" type="checkbox"/>I have read and agree to the <a href="#">terms & conditions</a>
                            </label>
                        </div>
                        <input class="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit"/>
                    </fieldset>
                </div>
        </div>
    </div>
</div>
        </div>
    );
}
                            
export default UserRegister;