import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';

class Item extends Component {
  constructor(props) {
    super(props);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {
      expanded: false
    };
  }

  toggleExpand() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const {
      id, href, items, icon, name
    } = this.props;
    const { expanded } = this.state;

    if (items && items.length !== 0) {
      return (
        <li className="nav-item">
          <button
            className={expanded ? 'nav-link' : 'nav-link collapsed'}
            data-toggle="collapse"
            data-target={`#collapse${id}`}
            aria-expanded="false"
            aria-controls={`collapse${id}`}
            onClick={this.toggleExpand}
            type="button"
          >
            <Icon icon="cog" />
            <span><Trans>{name}</Trans></span>
          </button>
          <div id={`collapse${id}`} className={expanded ? 'collapse show' : 'collapse'} data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              {items.map((item) => {
                const { itemHref, itemName } = item;
                return (
                  <Link key={`nav-item-${itemName}`} className="collapse-item" to={itemHref}>
                    <Trans>{itemName}</Trans>
                  </Link>
                );
              })}
            </div>
          </div>
        </li>
      );
    }

    return (
      <li className="nav-item">
        <Link className="nav-link" to={href}>
          {icon ? <Icon className="fas fa-fw fa-chart-area" /> : null}
          <span><Trans>{name}</Trans></span>
        </Link>
      </li>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number,
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemHref: PropTypes.string,
      itemName: PropTypes.string
    })
  )
};

Item.defaultProps = {
  id: 0,
  items: [],
  href: '#'
};

export default Item;
