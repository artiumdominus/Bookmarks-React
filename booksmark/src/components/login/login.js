import React from 'react';
import { Form, Button, FormField, Input, Container, Segment, Advertisement, Grid} from 'semantic-ui-react'
import './login.css'

export default class Login extends React.Component{

    render(){

        return (
            <div className='login'>
                < Grid verticalAlign='top' celled='internally' centered >
                    <Grid.Row centered columns={3}>
                        <Grid.Column>
                            <Form>
                                <Segment.Group stacked >
                                        <Segment>
                                        <FormField>
                                            <Input icon='user' iconPosition='left' placeholder='example@example.com' />
                                        </FormField>
                                        </Segment>
                                        <Segment>
                                        <FormField>
                                            <Input type="password" icon='unlock' iconPosition='left' placeholder='Password' />
                                        </FormField>
                                        </Segment>
                                        <Segment> 
                                        <Button fluid positive type='submit'>Login</Button>
                                        </Segment>
                                </Segment.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )

    }

}