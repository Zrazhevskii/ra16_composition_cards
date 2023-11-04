import React, { ReactNode }from 'react'

interface ICardprops {
    title: string,
    text: string,
    children?: ReactNode,
}

export const Card: React.FC<ICardprops> = ({title, text, children}) => {
  return (
    <div className="card box" style={{ width: '18rem', marginTop: '2rem' }}>
        {children}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
