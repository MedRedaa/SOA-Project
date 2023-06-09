import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../assets/img/banner.png";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Welcome Brave Kid"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <h1>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Welcome Brave Kid"]'><span className="wrap">{text}</span></span></h1>
                  <p>BraveKids is a platform dedicated to empowering and inspiring children with cancer to stay strong and positive throughout their journey. Join us in the fight against cancer and help make a difference in the lives of these brave young warriors.</p>

          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={banner} alt="banner"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}