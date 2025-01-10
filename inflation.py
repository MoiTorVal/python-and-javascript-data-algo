import pandas as pd

# Example using CPI data
cpi_1968 = 34.8  # CPI in 1968
cpi_2021 = 271.0  # CPI in 2021

# Minimum wage in 1968
min_wage_1968 = 1.60

# Adjust for inflation
min_wage_2021 = min_wage_1968 * (cpi_2021 / cpi_1968)
print('Adjusted minimum wage for 2021:', min_wage_2021)