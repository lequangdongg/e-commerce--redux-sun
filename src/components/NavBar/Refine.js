import React from 'react'

export default function Refine({navbarShowRefine, handleCheckbox, isCheck}) {
  return (
    <section className="show__refine">
      <h4 className="show__refine-title">Refine by</h4>
      <div className="show__refine-type">Type</div>
      <div className="show__refine-content">
        {navbarShowRefine.map((items, index) => (
          <div className="show__refine-items" key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckbox(items.name)}
              checked={isCheck.indexOf(items.name) === -1 ? false : true}
            />{" "}
            {items.name}
            <span className="show__refine-count">({items.count})</span>
          </div>
        ))}
      </div>
    </section>
  )
}
