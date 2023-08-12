import Input from './Input';
import Button from './Button';

function Calculator() {
  return (
    <div className="parent">
      <Input />
      <Button className="light-grey" value="AC=" />
      <Button className="light-grey" value="+/" />
      <Button className="light-grey" value="%" />
      <Button className="orange-color" value="/" />
      <Button className="light-grey" value="7" />
      <Button className="light-grey" value="8" />
      <Button className="light-grey" value="9" />
      <Button className="orange-color" value="x" />
      <Button className="light-grey" value="4" />
      <Button className="light-grey" value="5" />
      <Button className="light-grey" value="6" />
      <Button className="orange-color" value="-" />
      <Button className="light-grey" value="1" />
      <Button className="light-grey" value="2" />
      <Button className="light-grey" value="3" />
      <Button className="orange-color" value="+" />
      <Button className="zero" value="0" />
      <Button className="light-grey" value="." />
      <Button className="orange-color" value="=" />
    </div>
  );
}

export default Calculator;
