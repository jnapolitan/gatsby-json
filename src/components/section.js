// import React, { Component } from 'react';
// import { StaticQuery, graphql } from 'gatsby';

// export default class Section extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         order: this.props.order || 0
//       };

//     }

//     render () {
//         const { order } = this.state;
//         return (
//             <>
//                 <StaticQuery 
//                     query={graphql`
//                         // your graphql query string here
//                         `}
//                    render={data => (
//                         // your components that need access
//                             to data here
//                             )}
//                 />
//                 // maybe some other components here
//             </>
//             )
//         }
//     }