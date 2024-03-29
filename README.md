# Veg Garden Planner

<table>
<tr>
<td>
Veg Garden Panner is a website which generates a calendar of sowing dates for vegetables. Sowing dates are calculated using frost dates, which are generated by the website, using your location.
</td>
</tr>
</table>

## Demo

### Select

![Add Plant](/Media/SelectPage.gif)

### Diary

![Generate Sowing Dates](/Media/DiaryPage.gif)

### Settings

![Settings Page](/Media/SettingsPage.gif)

## Development

Follow these steps to run this project locally:

1. Install [Node.js](https://nodejs.org/)
2. Fork and clone [repository](https://github.com/C-Jess/Veg-Garden-Planner)
3. Install and set up [PostgreSQL](https://www.postgresql.org/) database
4. Add file `.env` and add environment variables
5. `npm install`
6. `npm run build`
7. `npm start`
8. Go to [localhost:3001](https://localhost:3001)

### Environment Variables

- `DB_USER` Set to your database username
- `DB_PASSWORD` Set to your database password
- `DB_HOST` Set to where your database is hosted (e.g. `localhost`)
- `DB_PORT` Set to the port of your database
- `DB_DATABASE` Set to the name of your database
- `OPENWEATHER_API_KEY` Set to your API key from [OpenWeather](https://home.openweathermap.org/api_keys)

### PostgreSQL Database Configuration

#### Create Tables

```SQL
CREATE TABLE plants
(
	plant_ID SERIAL PRIMARY KEY,
	plant_name VARCHAR(500) NOT NULL,
	alt_name VARCHAR(500),
	start_protected BOOL NOT NULL,
	direct_sow BOOL NOT NULL,
	inside_sow_offset INT,
	protected_sow_offset INT,
	unprotected_sow_offset INT,
	image_URL VARCHAR(500)
  )
```

#### Insert Sample Data

```SQL
INSERT INTO plants
(plant_name,alt_name,start_protected,direct_sow,inside_sow_offset,protected_sow_offset,unprotected_sow_offset)
VALUES
('Beetroot','Beets',False,False,-3,-4,0),
('Sprouting Broccoli','Broccoli',False,False,-3,-2,-2),
('Summer Cabbage','Cabbage',False,False,-4,-4,-2),
('Early Carrots',NULL,False,True,NULL,-7,-4),
('Maincrop Carrots','Carrots',False,True,NULL,0,0),
('Leeks',NULL,False,False,-12,-12,-4),
('Lettuce',NULL,False,False,-9,-7,-5),
('Onions','Bulb Onions',False,False,-12,-5,-5),
('Parsnips',NULL,False,True,NULL,-1,-1),
('Peas',NULL,False,False,-6,-8,-5),
('Potatoes',NULL,False,True,NULL,-4,-4),
('Radishes','Spring/Summer Radishes',False,True,NULL,-3,-1),
('Sweetcorn','Corn',True,False,-1,0,NULL),
('Squash',NULL,True,False,-2,NULL,NULL),
('Peppers','Sweet Peppers',True,False,-7,NULL,NULL),
('Tomatoes',NULL,True,False,-7,NULL,NULL)
```
