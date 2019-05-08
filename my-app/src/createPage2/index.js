import React from 'react';


class CreateFrom extends React.Component {
    state = {
        step: 1,
        data: {}
    }

    changeTextData = field => event => 
        this.setState({ data: {...this.state.data, [field]: event.target.value}});

    changeName = event => this.setState({ data: {...this.state.data, name: event.target.value}})

    changeAge = event => this.setState({ data: {...this.state.data, age: event.target.value}})

    submit = () => {
        console.log('submiting', this.state.data);
    }

    goTo = step => () => this.setState({ step })

    render() {
        const currentStep = this.state.step;

        return <div>
            {currentStep === 1 && 
                <div>step 1 
                    <div>
                        <label htmlFor="name">Name</label>
                        <input name="name" onChange={this.changeTextData('name')}></input>
                    </div>
                    <button onClick={this.goTo(2)}>next</button>
                </div>
            }
            {currentStep === 2 && 
                <div>step 2 
                    <div>
                        <label htmlFor="age">Age</label>
                        <input name="age" onChange={this.changeTextData('age')}></input>
                    </div>
                    <button onClick={this.goTo(1)}>back</button>
                    <button onClick={this.goTo(3)}>next</button>
                </div>
            }
            {currentStep === 3 && 
                <div>step 3 
                    <button onClick={this.goTo(2)}>back</button>
                    <button onClick={this.submit}>Submit</button>
                </div>
            }
        </div>
    }
}

export default CreateFrom;