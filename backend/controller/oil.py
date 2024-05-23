import csv
import json
import sys


import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.realpath(__file__))

# Construct the absolute path to the CSV file
csv_file_path = os.path.join(script_dir, 'oil_type.csv')

def get_engine_oil(engine_cc, mileage):
    with open(csv_file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cc_range = row['Engine CC']
            mileage_range = row['Mileage (km)']
            oil = row['Recommended Engine Oil']
            brand = row['Brand Names']
            
            if engine_cc == int(cc_range.split('-')[0]) and mileage_range == '0-100,000':
                return oil, brand
            elif engine_cc == int(cc_range.split('-')[0]) and mileage_range == '100,000-200,000':
                return oil, brand
            elif engine_cc == int(cc_range.split('-')[0]) and mileage_range == '200,000+':
                return oil, brand
    
    return None, None

def main():
    # Extract engine CC and mileage from command-line arguments
    engine_cc = int(sys.argv[1])
    mileage = float(sys.argv[2])

    # Get recommendations
    recommended_oil, brand_names = get_engine_oil(engine_cc, mileage)

    # Create a dictionary to hold the recommendations
    recommendations = {
        "recommended_oil": recommended_oil,
        "brand_names": brand_names
    }

    # Convert the dictionary to JSON string
    json_str = json.dumps(recommendations)

    # Print the JSON string
    print(json_str)

if __name__ == "__main__":
    main()
