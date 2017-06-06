import React from 'react';

const Diet = React.createClass({
  render() {
    const {tag, color} = this.props;

    return (
      <div id={tag}>
        <div
          className="guide"
          style={{backgroundColor: color, paddingTop: '60px', textAlign: 'center'}}>

          <h2>
            Diet Information
          </h2>
          <img
            src="https://redpandarocks.files.wordpress.com/2014/03/tumblr_m5z6vmskil1rnv314o1_500.jpg"
            style={{height: '250px', width: '350px'}}
          />
          <br />
          <br />
          <h3>
            <strong>
              What Red Pandas Eat
            </strong>
          </h3>
          <p>
            The red panda’s diet is very unusual for a mammal and consists mostly of bamboo.
            When the weather is warm enough, they also eat insects and fruit. Although the
            giant panda eats almost every part of the bamboo plant (except the roots), the red
            panda only eats the youngest, most tender shoots and leaves. In addition, the red
            panda chews the bamboo thoroughly, whereas the giant panda hardly chews at all.
            The red panda’s preference for bamboo is apparently an ancient adaptation, as
            indicated by fossils of similar animals that have been found in Eastern Europe and
            North America. These specimens date back to the Miocene (25 to 5 million years
            ago) and Pliocene (5 to 2 million years ago) periods, leading scientists to
            believe that bamboo and red panda-like animals have historically been found in
            many areas of the planet. It is likely that the range of the bamboo has increased
            and decreased with changes in global temperature and moisture, and fortunately for
            the red panda, bamboo still thrives in many parts of the southern Asia.
          </p>
          <b />
          <p>
            The females create a nest in tree holes, branch forks, tree roots or bamboo
            The red panda’s dietary specialization has an profound impact on the animal’s
            daily life. For one thing, bamboo is very high in indigestible fiber, making it
            extraordinarily difficult for red pandas to extract the nutrients that they need.
            Cows, horses, and other herbivorous mammals normally have very strong teeth and
            extra fermentation chambers in their guts. However, while red pandas have large
            teeth, their guts are not specialized to handle plant matter. In fact, red pandas
            only extract about one quarter of the nutrients from bamboo, and food passes
            through their digestive tract quite quickly. That means that many red pandas lose
            as much as 15 percent of their body weight during the winter, when their other
            preferred foods (such as insects) are not readily available.
            To cope with the lack of food during the winter months, red pandas have evolved
            several ways of meeting their energy demands. For instance, red pandas can spend
            as much as 13 hours a day looking for and eating bamboo. They also have a very low
            metabolic rate (almost as low as sloths), and can slow their metabolism even
            further in colder temperatures. Finally, their thick fur covers their entire body,
            including the soles of their feet, allowing them to conserve their body heat.
          </p>
          <br />
          <a href="https://redpandanetwork.org/red_panda/about-the-red-panda/">
            {' '}More Information
          </a>
          <br />

        </div>
      </div>
    );
  }
});

export default Diet;
