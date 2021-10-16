
import { Form, FormControl,Button } from 'react-bootstrap';
import Meals from '../Home/Meals';

const Menu = () => {

    return (
        <div>
            <h2 className="my-4">Select Menu</h2>
                <div class="container overflow-hidden">
                    <div class="row gx-5">
                        <div class="col-3 col">
                            <div class="p-3 bg-white"></div>
                        </div>

                        <div class="col-md-6 col">
                            <div class="p-3 bg-white">
                                <Form className="d-flex w-60">
                                    <FormControl
                                        type="search"
                                        placeholder="Search food"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-danger">Search</Button>
                                </Form>
                            </div>
                        </div>

                        <div class="col-3 col">
                            <div class="p-3 bg-white"></div>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default Menu;