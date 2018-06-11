// Copyright (c) 2018 WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
//
// WSO2 Inc. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied. See the License for the
// specific language governing permissions and limitations
// under the License.

import React,{Component} from 'react';
import logo from './wso2.svg';
import 'normalize.css';
import './App.css';
import './bootstrap.min.css';
import './style.css';
import './bootstrap-theme.min.css';
import $ from "jquery";
import {FormGroup,ControlLabel, Checkbox, FormControl, Button,Form,Col,Row,Jumbotron,Radio} from 'react-bootstrap';

class App extends React.Component {

    handleSubmit(e) {
        e.preventDefault();

        const formData = {};

        for (let i = 0; i < e.target.length; i ++){
            formData[e.target[i].name] = e.target[i].value;
        }
        console.log('-->', formData);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:9090/githubForm',
            data: formData
        })
            .fail(function(jqXhr) {
                console.log('failed to register');
            });
    }

    render() {
        return (
            <div>
                <header className = "App-header">
                <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> &#160;   &#160;
                    <small>
                        Github committers
                    </small>
                </h1>
                </header>

                <Jumbotron>
                    <Form horizontal align="center" onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" className="FormRow">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="email" type="email" placeholder="Email"  />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="githubId" className="FormRow">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Github Id
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="githubId" type="text" placeholder="Github Id" required />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="githubVerifiedEmail" className="FormRow">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Github Verified Email
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="githubVerifiedEmail" type="email" placeholder="Github Verified Email" required />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="productTeam" className="FormRow">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Product team
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="productTeam" type="text" placeholder="Product team" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="githubOrg" className="FormRow" align="left">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Github Organization
                                </Col>
                                <Col sm={5}>
                                    {/*<FormControl componentClass="Checkbox">*/}
                                    <Checkbox name="wso2"> wso2</Checkbox>
                                    <Checkbox name="wso2_support"> wso2-support</Checkbox>
                                    <Checkbox name="wso2_dev_ux"> wso2-dev-ux</Checkbox>
                                    <Checkbox name="wso2_extensions"> wso2-extensions</Checkbox>
                                    <Checkbox name="wso2_incubator"> wso2-incubator</Checkbox>
                                    <Checkbox name="ballerina_lang"> ballerina-lang</Checkbox>
                                    <Checkbox name="wso2_ballerina"> wso2-ballerina</Checkbox>
                                    <Checkbox name="ballerina_platform"> ballerina-platform</Checkbox>
                                    <Checkbox name="ballerina_guides"> ballerina-guides</Checkbox>
                                    {/*</FormControl>*/}
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="repositoryName" className="FormRow">
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Repository Name
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="repositoryName" type="text" placeholder="Repository Name" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="privileges" className="FormRow" >
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Privileges
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="privileges" componentClass="select" placeholder="select">
                                        <option value="read">Read</option>
                                        <option value="write">Write</option>
                                        <option value="admin">Admin</option>
                                    </FormControl>
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup controlId="intern" className="FormRow" align="left" >
                            <Row>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Intern
                                </Col>
                                <Col sm={5}>
                                    <FormControl name="isIntern" componentClass="radio">
                                    <Radio  name="intern">
                                        Yes
                                    </Radio>
                                    <Radio name="employee">
                                        No
                                    </Radio>
                                    </FormControl>
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

            </div>
        );
    }
}


export default App;
