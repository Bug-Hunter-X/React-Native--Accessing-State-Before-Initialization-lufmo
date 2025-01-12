```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (isReady && someCondition) {
    console.log('Count:', count); 
  }

  return (
    <View>
      <Text>{isReady ? count : 'Loading...'}</Text> 
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

//Or using optional chaining

function MyComponent() {
  const [count, setCount] = useState(0);

  //Using optional chaining
  console.log(count?.toString())

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```