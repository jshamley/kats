import React from 'react';

const Reproduction = React.createClass({
  render() {
    const {tag, color} = this.props;

    return (
      <div id={tag}>
        <div
          className="guide"
          style={{
            textAlign: 'center',
            paddingTop: '30px',
            backgroundColor: color
          }}>
          <div>
            <h2>
              Mating and Reproduction Information
            </h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/be/Red_Panda_in_a_Gingko_tree.jpg"
              style={{height: '150px', width: '250px'}}
            />
            <br />
            <br />
            <h3>
              <strong>
                Reproduction and Development
              </strong>
            </h3>
            <p>
              Red pandas breed from January through March in the Northern Hemisphere. In the
              Southern Hemisphere, breeding season is June-August. The rapid change in
              photoperiod
              (day length) after the winter solstice instigates this breeding season. Mating
              occurs on the ground, and gestation appears to include a period of delayed
              implantation which is usually 114 to 145 days, but may be as short as 90 days or
              as
              long as 158 days. As reproduction expends a great deal of energy, it is believed
              that a long gestation period may be due to a slow metabolic rate. Late spring
              births
              also coincide with the most tender and digestible bamboo shoots and leaves
              emerging.
            </p>
            <b />
            <p>
              The females create a nest in tree holes, branch forks, tree roots or bamboo
              thickets
              and line it with moss, leaves and other soft plant material. A litter of usually
              two
              cubs is born sometime between May and July in the northern hemisphere. Newborns
              weigh between 3.9 and 4.6 ounces (110 to 130 g) and are completely furred to
              protect
              them from the cold environment. The offspring stay with the mother for about a
              year,
              which is when they normally reach adult size. Young will reach sexual maturity at
              round 18 months.
            </p>
            <br />
            <p>
              In confined conditions, where the male cannot get away from the protective female,
              aggression can occur between males and females possibly resulting in injury to
              cubs.
              In larger enclosures, the male is tolerated but will keep his distance. Once the
              cubs emerge, most males will interact amicably with them and even play with them.
              In
              fact, at certain stages, males will play with the rambunctious cubs more than
              females. On the other hand, it is usually not possible to keep two adult females
              together.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

export default Reproduction;
