---
layout: page
title:  "Release 7.1.0 of the Open Systems Pharmacology Suite"
categories: news
description: "We are pleased to announce the new release of the OSP Suite Version 7.1.0 which now available for download"
icon: cog
---
# Release Notes for the Open Systems Pharmacology Suite 7.1.0

## New Features

### Elderly ICRP Population
New elderly ICRP data integrated (based on the publication http://dx.doi.org/10.1007/s40262-016-0422-3).  

Comprehensive, knowledge-driven database extension to encompass the full course of healthy aging from young adulthood through to the age of 100 years. The elderly PBPK platform combined with age-related information on pathway or target abundance changes can be applied to develop novel treatment strategies. Such a database allows a diversification of age- and/or disease-related physiological alterations. 

![Image](https://cloud.githubusercontent.com/assets/1041237/26593318/a61a2a92-4531-11e7-8805-438ab3fefad0.jpg)

### 	Enhanced Protein Model
The current parameterization of the model replaces the generic protein PBPK model available in PK-Sim since version 4.2. The new parameterization includes the following changes:

- The lymph and fluid recirculation flow rates of the organs are re-fitted and are now proportional to the plasma flow and the lymph flow of the respective organs. 
- The properties of the vascular endothelium of bone have now the standard values for continuous endothelium. This improves the distribution behavior for antibodies in humans. 
- Drug uptake into the endosomal space occurs now only from plasma. Also, the drug-FcRn complex is recycled only to plasma. This prevents net extravasation via the endosome. With this parameterization, there is a clear separation for the mechanism of extravasation (described by the two-pore model) and endosomal clearance/FcRn mediated recycling.  
- New literature values are used for the hydraulic conductivity of some organs. 

*A publication in a peer reviewed journals is in preparation.*

The new parameterization affects the building blocks for individuals/populations and for compounds. **Existing building blocks and simulations within projects created with version 7.0 or previous remain as they are, i.e. the old parameterization is kept.**

### Rabbit
A rabbit model was included that can be employed in preclinical development and applications in environmental risk assessments. The rabbit PBPK model was developed and evaluated with available literature data. Model predictions involve scenarios of both intravenous (i.v.) and oral (p.o.) administrations of small and large compounds. 

*A publication in a peer reviewed journals is in preparation.*

### New Installation Validator Tool
A validation of the Open Systems Pharmacology Suite installation is performed to ensure that the Suite works fully as intended when installed in the computing environment. 
The key functionalities are tested through comparison of reference simulation outputs with locally calculated simulation outputs for a set of predefined test simulations. 

The validation report will include:
- overall validation result (Valid/Invalid)
- validation result for every test simulation (Valid/Invalid)
- summary of the deviations for every Invalid simulation (numerical values and comparison plots)
- information about installed software versions and local computing environment
- selected comparison plots for every Valid simulation 


## Fixed issues and Improvements

### PK-Sim and MoBi
- [Parameter Identification: Export Parameter values and Error values after PI-run](https://github.com/Open-Systems-Pharmacology/MoBi/issues/10)
- [Parameter Identification: Excel export of  results](https://github.com/Open-Systems-Pharmacology/MoBi/issues/11)
- [Parameter Identification: "Stop" only works with long delay](https://github.com/Open-Systems-Pharmacology/MoBi/issues/41)
- [Memory usage reduced](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/34)
- [Add selected observed data into the active plot of the active simulation](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/104)
- [Crash when starting observed data import and clicking cancel right away](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/78)
- [No close confirmation dialog after changing Parameter Identification settings](https://github.com/Open-Systems-Pharmacology/MoBi/issues/42)
- [Data import: "Dimensionless" is missing](https://github.com/Open-Systems-Pharmacology/MoBi/issues/44)
- [Error bars are shown even when the corresponding data set is un-checked](https://github.com/Open-Systems-Pharmacology/MoBi/issues/45)
- [Cannot start sensitivity analysis or parameter identification via F5 if any simulation is opened](https://github.com/Open-Systems-Pharmacology/MoBi/issues/37)
- [Parameter Identification returns wrong results in log scale if any observed data is 0 and removeLLOQMode=Never]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/31)
- [While Parameter Identification calculates Jacobian/Sensitivity, Visual Feedback is not update properly](https://github.com/Open-Systems-Pharmacology/MoBi/issues/21)

### PK-Sim
- [NHANES population needs update](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/69)
- [Display total GFR](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/43)
- [PK-Analysis changes](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/54)
- [Ontogeny after Individual update](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/46)
- [Box whisker X-grouping throws exception](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/47)
- [GET Variability in Population is not set](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/45)
- [Simulation and corresponding confidence interval invisible after saving/reopening a model](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/36)
- [Strange behavior if brain influx transporter is built in PK-sim](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/38)
- [Wrong name for receptor occupancy output](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/39)
- [Grid lines visible by default even though they are unchecked in the axis properties](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/40)
- [Removing simulation referenced by unloaded Sensitivity Analysis crashes when the analysis is loaded](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/41)
- [Renaming simulation may not update Parameter Identification if it is not loaded](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/42)
- [Editing meta data/Renaming of Observed Data does not change some hidden name](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/35)
- [LLOQ wrongly used in Parameter Identification if observed data was imported in mass unit](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/31)
- [PK Analysis are only exported to pdf in default unit](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/29 )
- [Removing output from population analysis should remove corresponding curves](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/28)
- [Recreating aging simulations produces changed PSV in the simulation](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/26)
- [Default mapping Inhibition/Induction](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/25)
- [Development of Simulation without formulation is possible and crashes](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/24)
- [Wrong path for association rate used in some FcRn reactions](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/23)
- [AUC_norm and Cmax_norm for multiple doses not calculated correctly](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/22)
- [Error after multiple Data imports](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/21)
- [Working Journal path should be saved as relative to project instead of absolute](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/20)
- [Working Journal tables appear to have different format rules when pasted vs. when inserted (as a new table)](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/18)
- [Chart X-Axis range wrong after setting Side margins enabled](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/17)
- [Copying images from Journal Page to PowerPoint does not work](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/16)
- [AUC_tDlast_to_inf instead of AUC_tlastD-1_tDlast should be used for AUC Ratio](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/15)
- [Name of the observed data building block not updated when renamed](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/14)
- [Parameter Identification parameter bounds not checked](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/13)
- [Updating Particles dissolution formulation from a Building Block does not work if particle size distribution was changed](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/12)
- [Population Simulation Time Profile figure automatically resets zoom after restart PK-SIM](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/5)
- [Add fu to two pores rate equation for the "TwoPoresTransportLink"](https://github.com/Open-Systems-Pharmacology/PK-Sim/issues/61)

### MoBi
- [Exception error after Reaction commit to building block]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/79)
- [History does not report resetting a parameter]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/80)
- [Extended PDF Report of simulation throws exception error]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/81)
- [Chart template in Result plot gone after save and close]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/38)
- [Renaming Reactions parameter creates error in Parameter Identification]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/39)
- [Parameter Identification: Mapping dimensionless to dimensionless does not work]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/40)
- [Favorite parameters from Simulation are not selected as optimization Parameters]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/43)
- [It is possible to create a PK-Sim molecule without defining the relevant properties]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/29)
- [After removal of Observers and update of simulations, the (missing) outputs remain in Parameter Identification]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/32)
- [Replace simulations after cloning a parameter identification seems to be corrupted]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/33)
- [Event assignment- > Entity to change: When multiple Building Blocks are present reactions/molecules from all Building Blocks are shown together without distinguishing]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/34)
- [Observed data may not be deleted if used in any Parameter Identification]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/36)
- [When adding a PK-Sim molecule to a building block it's possible to enter a name that already exists in the building block]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/30)
- [Comparison of spatial structures does not recognize differences in tables]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/20)
- [After undoing deletion of a simulation, paths of results in chart editor are lumped]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/22)
- [Different units shown in Parameters tree and in Favorites of a simulation (refresh issue)]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/23)
- [Vmax for Active Transport not contained in Difference]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/25)
- [MSV & PSV & Parameter Value Description field: Ctrl/Alt characters (µ, €) cannot be entered](https://github.com/Open-Systems-Pharmacology/MoBi/issues/26)
- [Newly created active transport processes have dimension other from "Amount per time"](https://github.com/Open-Systems-Pharmacology/MoBi/issues/27)
- [Sensitivity calculation if no curves in the simulation available](https://github.com/Open-Systems-Pharmacology/MoBi/issues/28)
- [Compare will not show change in concentration of a molecule when formula-defined]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/12)
- [Error after name change of molecule and deletion of reaction connection]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/13)
- [PDF Report does not list changed molecule initial value if a formula is manually overridden](https://github.com/Open-Systems-Pharmacology/MoBi/issues/14)
- [Connecting a reaction partner does only work within visible part of the reaction Chart]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/15)
- [Update of Observers in a simulation removes option of resetting manually changed parameter values to default](https://github.com/Open-Systems-Pharmacology/MoBi/issues/16)
- [Global reaction parameters should be usable in a global molecule parameter]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/17)
- [Diagram layout during merge can be improved]( https://github.com/Open-Systems-Pharmacology/MoBi/issues/18)
- [Search function: attention in Reaction chart or list is not set](https://github.com/Open-Systems-Pharmacology/MoBi/issues/2)
- [Rename Dependent Objects list shows unnamed dependency if modifier molecule is renamed](https://github.com/Open-Systems-Pharmacology/MoBi/issues/3)
- [Cannot rollback in history after updating simulation from Building Block](https://github.com/Open-Systems-Pharmacology/MoBi/issues/4)
- [Chart: Changing min/max of one y-axis also changes min/max of the second y-axis](https://github.com/Open-Systems-Pharmacology/MoBi/issues/5)
- [Changes in result chart comparison not saved after save and re-open](https://github.com/Open-Systems-Pharmacology/MoBi/issues/6)
- [After extending MSV BB molecules are present were they should not be](https://github.com/Open-Systems-Pharmacology/MoBi/issues/7)
- [Impossible to choose formula when creating new container observer for e.g. concentration](https://github.com/Open-Systems-Pharmacology/MoBi/issues/8)
- [MoBi hangs when trying to import data from an excel sheet with a figure](https://github.com/Open-Systems-Pharmacology/MoBi/issues/9)
### MoBi Toolbox for Matlab
- [getParameter using wildcards in path will not always return all matching values or paths]( https://github.com/Open-Systems-Pharmacology/Matlab-Toolbox/issues/2)
- [Handling arrows in parameter names]( https://github.com/Open-Systems-Pharmacology/Matlab-Toolbox/issues/3)
