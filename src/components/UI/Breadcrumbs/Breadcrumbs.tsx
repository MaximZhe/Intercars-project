import { locale } from 'moment';
import React from 'react';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const salesMatch = useMatch(`${location.state}`);
    console.log(location)
  
    // const generateCrumbs = (state:string, pathname:string) => {
    //   const paths = state.split('/').filter(Boolean);
    //   const links = pathname.split('/').filter(Boolean);
    //   const arr = [...paths,...links];
    //   console.log(paths, links)
    //   let path = '';
    //   return paths.map((state, index) => {
    //     path += `/${state}`;
    //     const label = state.charAt(0).toUpperCase() + state.slice(1);
    //     return {
    //       label,
    //       path,
    //     };
    //   });
    // };
    const paths = decodeURIComponent(location.state).split('/').filter(Boolean);
    const links = location.pathname.split('/').filter(Boolean);
    const generateCrumbs = (paths: string[], labels: string[]): { path: string, label: string }[] => {
      let path = '';
      return paths.map((state, index) => {
        
        path = `${state}`;
        return {
          path,
          label: labels[index]
        };
      });
    }
  
    const crumbs = generateCrumbs(paths, links);
  
    return (
      <div className='crumbs'>
        
         {crumbs.map((crumb, index) => (
      <span className='crumbs__item' key={index}>
        {index === crumbs.length - 1 ? (
          <span className='crumbs__link'>{crumb.path}</span>
        ) : (
          <Link to={index === 0 ? `/${crumb.label}` : `/${crumbs[index-1]?.label}/${crumb.label}`} 
          state={index === 0 ? `/${crumb.path}` : `/${crumbs[index-1]?.path}/${crumb.path}`} className='crumbs__link'>{crumb.path}</Link>
        )}
        {index < crumbs.length - 1 ? ' | ' : ' '}
      </span>
    ))}
      </div>
    );
  };
  
  export default Breadcrumbs;