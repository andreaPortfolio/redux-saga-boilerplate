
import * as React from 'react';


interface Props {
  actionGetChronology: (params) =>void
}

export const TestComponent: React.FunctionComponent<Props> = props => {
  const {
    actionGetChronology
  } = props;


  React.useEffect(() => {
    actionGetChronology({});

  }, []);

  return (
    <div>
       <button onClick={()=>{ actionGetChronology({})}}/>
    </div>
  );
};
