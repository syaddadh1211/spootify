import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "axios";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    const myToken =
      "BQDBdRM6xjCnmjbu6w8ES5kc3VYzXeYzVroRH7GpNePlASOTFKk5JQ3wEGhMTgTmigpgYKDWR6dohWS38k1Syd6XyiRMxvV0HCHjKsARDv4baMI6FQsMU1IN-SuJGS0VeAvFhgoGwz08iCFQ8lHeBxPQyy0bOr2B8iE";

    //Fetch and display *Released This Week* songs
    axios("https://api.spotify.com/v1/browse/new-releases", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + myToken,
      },
    })
      .then((response) => response)
      .then((response) => this.setState({ newReleases: [response.data] }));

    //Fetch and display *Featured Playlists*
    axios("https://api.spotify.com/v1/browse/featured-playlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + myToken,
      },
    })
      .then((response) => response)
      .then((response) => this.setState({ playlists: [response.data] }));

    //Fetch and display *Browse* genres
    axios("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + myToken,
      },
    })
      .then((response) => response)
      .then((response) => this.setState({ categories: [response.data] }));
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
