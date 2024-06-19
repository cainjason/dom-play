import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="bg-blue-300 text-2xl text-white font-black">
          <h1>I'm the Contact page.</h1>
        </div>
        <div className="p-2px ml-5px">
          <div className="bg-gray-300 text-white h-180px w-full">
            CARD
            <ul>
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                >
                  Active item
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Item
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action disabled"
                >
                  Disabled item
                </a>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
