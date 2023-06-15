import { Grid, Segment } from "semantic-ui-react";
import "./search_modal.css";

export default function RecentSearchList({ keyword }) {
  return (
    <li>
      <Grid>
        <Grid.Column width={2}>
          <img className="search_icon" src="images/list_icon.jpg" />
        </Grid.Column>
        <Grid.Column width={11}>
          <span className="keyword">{keyword}</span>
        </Grid.Column>
        <Grid.Column width={2} className="x_icon">
          <img className="x_icon" src="images/x_icon.png" />
        </Grid.Column>
      </Grid>
    </li>
  );
}
