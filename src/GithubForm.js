import React  from 'react';
import {FormGroup,ControlLabel, Checkbox, FormControl, Button,Form,Col,Row,Jumbotron,Radio} from 'react-bootstrap';

class GithubForm extends React.Component {
    render() {


        return (
            <Jumbotron>
            <Form horizontal align="center">
                <FormGroup controlId="email" className="FormRow">
                    <Row>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={5}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="githubId" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Github Id
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Github Id" required />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="githubVerifiedEmail" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Github Verified Email
                        </Col>
                        <Col sm={5}>
                            <FormControl type="email" placeholder="Github Verified Email" required />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="productTeam" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Product team
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Product team" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="githubOrg" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Github Organization
                        </Col>
                        <Col sm={5}>
                            <Checkbox> wso2</Checkbox>
                            <Checkbox> wso2-support</Checkbox>
                            <Checkbox> wso2-dev-ux</Checkbox>
                            <Checkbox> wso2-extensions</Checkbox>
                            <Checkbox> wso2-incubator</Checkbox>
                            <Checkbox> ballerina-lang</Checkbox>
                            <Checkbox> wso2-ballerina</Checkbox>
                            <Checkbox> ballerina-platform</Checkbox>
                            <Checkbox> ballerina-guides</Checkbox>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="repositoryName" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Repository Name
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Repository Name" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="privileges" className="FormRow">
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Privileges
                        </Col>
                        <Col sm={5}>
                            <FormControl componentClass="select" placeholder="select" required>
                                <option value="read">Read</option>
                                <option value="write">Write</option>
                                <option value="admin">Admin</option>
                            </FormControl>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="intern" className="FormRow" >
                    <Row>
                        <Col componentClass={ControlLabel} sm={2}>
                            Intern
                        </Col>
                        <Col sm={5}>
                            <Radio  name="radioGroup">
                                Yes
                            </Radio>
                            <Radio checked="true" name="radioGroup">
                                No
                            </Radio>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup className="FormRow2">
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Request</Button>
                    </Col>
                </FormGroup>
            </Form>
            </Jumbotron>


        );
    }
}

export default GithubForm;