import { connect } from 'react-redux'
import TestComponent from '../components/testcomponent'

const mapStateToProps = (state) => {
    
  state.test.text = 'aaa';
  return { 
            test: state.test
         }
}

//コンポーネントに渡したい関数を記述
const mapDispatchToProps = dispatch => {
    return {
        onClickText: () => {
            console.log('click');
        }
    }
}

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)
export default TestContainer
