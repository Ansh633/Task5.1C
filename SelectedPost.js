import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import Question from './AskQue';
import ArticleSection from './ArticlePost';


function SelectedPost() {
  const [value, setValue] = React.useState('Question')
  return (
    <> 
    <Form>
      <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Question'
          name='checkboxRadioGroup'
          value='Question'
          checked={value === 'Question'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Article'
          name='checkboxRadioGroup'
          value='Article'
          checked={value === 'Article'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>

{value === 'Question' ? (
    <Question />
  ) : (
      <ArticleSection />
      )}
      </>
  )
}

export default SelectedPost;