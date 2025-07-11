export interface Destination {
  id: number; // Unique identifier for the destination
  desc: string; // Full description of the destination
  shortDesc: string; // Short description for previews
  location: string; // Location of the destination
  howToGetThere: string; // Information on how to reach the destination
  activities: string[]; // List of activities available at the destination
  accommodations: string[]; // List of accommodations available at the destination
  image?: string;
}
